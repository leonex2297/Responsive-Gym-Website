import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Congratulate members for showing up at personal training
            sessions.Our trainers are ready to help you get in the best shape of
            your life!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">https://www.youtube.com/watch?v=I2NNxr3WPDo</p>
          <p className="my-5">you can type anything</p>
          <p> Important Message</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">you can type anything</p>
          <p>(333)425-6801</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
