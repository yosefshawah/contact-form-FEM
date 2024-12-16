import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "General Enquiry" | "Support Request"; // You can limit the values for radio buttons
  message: string;
  consent: boolean;
};

const onSubmit: SubmitHandler<FormData> = (data, e) => {
  console.log("Form Data:", data);
  toast.success(
    <div>
      <h2>Message sent!</h2>
      <p>thanks for completing the form. We'll be in touch soon!</p>
    </div>,
    {
      style: { background: "#2F4144", color: "#E0E9EC" },
      position: "top-center", // position the toast in the top center of the screen
      autoClose: 3000, // automatically close after 3 seconds
      hideProgressBar: true, // optionally hide the progress bar
    }
  );
  // Reset the form after submission
  e?.target.reset(); // This clears the form fields
};

function App() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>();

  return (
    <>
      <main>
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>
          <div className="row name">
            <div className="first-name">
              <label htmlFor="">first name</label>
              <input id="firstName" {...register("firstName")} type="text" />
            </div>
            <div>
              <label htmlFor="">last name</label>
              <input id="lastName" {...register("lastName")} type="text" />
            </div>
          </div>
          <div className="col email">
            <label htmlFor="">Email Address *</label>
            <input id="email" {...register("email")} type="email" required />
          </div>
          <div className="col">
            <label>Query Type</label>
            <div className="query row">
              <div className="row query-inputs">
                <label className="radio-label">
                  <input
                    id="generalEnquiry"
                    {...register("queryType")}
                    type="radio"
                    value="General Enquiry"
                  />
                  <span className="custom-radio"></span>
                  <span className="placeholder">General Enquiry</span>
                </label>
                <label className="radio-label">
                  <input
                    id="supportRequest"
                    {...register("queryType")}
                    type="radio"
                    value="Support Request"
                  />
                  <span className="custom-radio"></span>
                  <span className="placeholder">Support Request</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <label htmlFor="">Message *</label>
            <input
              id="message"
              {...register("message")}
              className="message-input"
              type="text"
            />
          </div>
          <div className="row">
            <label className="consent-checkbox">
              <input id="consent" {...register("consent")} type="checkbox" />
              <p>I consest to being contacted by the team</p>
            </label>
          </div>
          <button className="submit">Submit</button>
        </form>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
