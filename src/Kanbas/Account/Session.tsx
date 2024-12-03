import * as client from "./client";
import { useEffect, useState, useCallback } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = useCallback(async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  }, [dispatch]); // Include 'dispatch' as a dependency

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]); // Include 'fetchProfile' as a dependency

  if (!pending) {
    return children;
  }

  return null; // Or a loading spinner/message while pending
}