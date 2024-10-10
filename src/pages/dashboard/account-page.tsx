import React from "react";
import UpdateCard from "@/components/account/update-card";
import DeleteCard from "@/components/account/delete-card";

const AccountPage: React.FC = () => {
  return (
    <div className="space-y-6 mt-4">
      <UpdateCard />
      <DeleteCard />
    </div>
  );
};

export default AccountPage;
