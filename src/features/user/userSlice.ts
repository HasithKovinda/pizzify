import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const fetchAddress = createAsyncThunk("user/fetchAddress", async function () {
  const positionObj: any = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude as number,
    longitude: positionObj.coords.longitude as number,
  };
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  return { position, address };
});

type User = {
  userName: string;
  status: "idle" | "loading" | "error";
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error: string;
};

const initialState: User = {
  userName: "",
  status: "idle",
  position: {
    latitude: 0,
    longitude: 0,
  },
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<{ userName: string }>) {
      state.userName = action.payload.userName;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        (state.status = "error"),
          (state.error = action.error.message || "Something went wrong");
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
