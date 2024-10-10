import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import UpdateForm from "@/components/account/update-form";

const UpdateCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Update User</CardTitle>
        <CardDescription>Update the user information using the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <UpdateForm />
      </CardContent>
    </Card>
  );
};

export default UpdateCard;
