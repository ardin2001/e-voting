import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  or,
  getDoc,
  updateDoc
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(App);

export async function PostUser(dataInput: any) {
  const UserRef = doc(collection(db, "users"));

  const q = query(collection(db, "users"), where("nim", "==", dataInput.nim));
  const querySnapshot = await getDocs(q);
  const response: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (response.length == 0) {
    try {
      await setDoc(UserRef, dataInput);
      return { status: true, statusCode: 200 };
    } catch {
      return { status: false, statusCode: 501 };
    }
  }
  return { status: false, statusCode: 401 };
}

export async function GetAllUser() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const response: any = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return { status: true, data: response, statusCode: 200 };
  } catch {
    return { status: false, data: null, statusCode: 501 };
  }
}

export async function GetUserByNim(nim: any) {
  console.log("nim", nim);
  const q = query(collection(db, "users"), or(where("nim", "==", nim)));
  const querySnapshot = await getDocs(q);
  const response: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (response.length != 0) {
    return { status: true, data: response };
  }
  return { status: false, data: null };
}

export async function GetUserById(id: any) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { status: true, data: docSnap.data() };
  }
  return { status: false, data: null };
}

export async function DeleteUser(id: any) {
  const { status } = await GetUserById(id);
  if (!status) {
    return { status: false, statusCode: 401 };
  }

  try {
    await deleteDoc(doc(db, "users", id));
    return { status: true, statusCode: 200 };
  } catch {
    console.log("masuk catch", typeof id);
    return { status: false, statusCode: 501 };
  }
}

export async function UpdateUser({id,dataUpdate} : {id:string,dataUpdate:any}) {
  const { status } = await GetUserById(id);
  if (!status) {
    return { status: false, statusCode: 401 };
  }

  const userRef = doc(db, "users", id);
    try{
      await updateDoc(userRef, dataUpdate);
      return {status : true, statusCode : 200}
    }
    catch{
      return {status : false, statusCode : 501}
    }
}