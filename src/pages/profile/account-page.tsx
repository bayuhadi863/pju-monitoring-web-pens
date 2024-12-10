import React from "react";
import UpdateCard from "@/components/account/card/update-profile-card";
import DeleteCard from "@/components/account/card/delete-profile-card";
import UpdatePasswordCard from "@/components/account/card/update-password-card";
import DialogConfirmDelete from "@/components/account/dialog/dialog-confirm-delete";

const AccountPage: React.FC = () => {
  return (
    <>
      <div className="space-y-6">
        <UpdateCard />
        <UpdatePasswordCard />
        <DeleteCard />
      </div>
      <DialogConfirmDelete />
    </>
  );
};

export default AccountPage;
