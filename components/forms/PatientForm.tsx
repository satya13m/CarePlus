"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


import AnimatedText from "@/components/style/AnimatedText";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldTypes {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    CHECKBOX = "CHECKBOX"

}



const PatientForm = () => {
   const [isLoading,setisLoading] = useState(false) 
   const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    //  This will be type-safe and validated.
    setisLoading(true);

    try {
        // const userData = {name,email,phone}

        // const user = await createUser(userData)

        // if(user) router.push('/patients/${user.$id}/register')
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Namaste 🙏 </h1>
          <AnimatedText
            className="text-dark-700"
            texts={[
              "Schedule Your First Appointment",
              "अपनी पहली अपॉइंटमेंट शेड्यूल करें",
              "ପ୍ରଥମ ଆପଏଣ୍ଟମେଣ୍ଟ ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ",
            ]}
          ></AnimatedText>
        </section>

        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@12.com"
          iconSrc="assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone No"
          placeholder="+91 XXXXX XXXXX"
        />

       <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

      </form>
    </Form>
  );
}

export default PatientForm;
