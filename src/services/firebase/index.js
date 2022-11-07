import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCITjnXfdJ23HV-j_Q-aThiFSkPswi3614",
  authDomain: "aczu37480.firebaseapp.com",
  projectId: "aczu37480",
  storageBucket: "aczu37480.appspot.com",
  messagingSenderId: "795126020451",
  appId: "1:795126020451:web:3e0931c043da490b28fb56"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)