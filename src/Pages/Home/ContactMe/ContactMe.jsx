import contactImg from '../../../assets/contact-svg/undraw_personal_email_re_4lx7 (1).svg';
import { useForm } from "react-hook-form"

const ContactMe = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleForm = data => {
        console.log(data);
    }
    return (
        <section className='flex flex-col md:flex-row items-center m-10'>
            <div className='md:w-1/2'>
                <img src={contactImg} alt="" className='h-96' />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-sky-600 mb-5'>Contact Me</h1>
                <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-4'>
                    <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered w-full max-w-sm" />
                    {errors?.name && <span className='text-red-500'>This field is required</span>}
                    <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full max-w-sm" />
                    {errors?.email && <span className='text-red-500'>This field is required</span>}
                    <textarea placeholder="Message" {...register("message", { required: true })} className="textarea textarea-bordered textarea-md w-full max-w-sm" ></textarea>
                    {errors?.message && <span className='text-red-500'>This field is required</span>}
                    <button className='btn w-full max-w-sm bg-sky-500 text-white' type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;