import { HiOutlineMail, HiPhone } from "react-icons/hi";

// interfaces
export interface formType {
  id: string;
  label?: string;
  placeHolder: string;
  error?: boolean;
}

export interface contactType {
  icon: any;
  info: string;
}

// data
export const contactData: contactType[] = [
  {
    icon: HiPhone,
    info: "052-4673370",
  },
  {
    icon: HiOutlineMail,
    info: "orsasson72@gmail.com",
  },
];

export const form: formType[] = [
  {
    id: "name",
    label: "Name",
    placeHolder: "Your Name",
    error: undefined,
  },
  {
    id: "email",
    label: "Email",
    placeHolder: "Your Email",
    error: undefined,
  },
  {
    id: "message",
    placeHolder: "You message",
  },
];
