import { FooterTitle, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


export default function Footer() {
    return (
            <footer className=" bg-bg-color border text-white p-6">
                <div className="">
                    <div className=" px-4 pt-4 flex items-center justify-between">
                        <FooterCopyright href="#" by="Flowbite™" year={2024} />
                        <div className="flex space-x-6">
                            <FooterIcon href="#" icon={BsFacebook} />
                            <FooterIcon href="#" icon={BsInstagram} />
                            <FooterIcon href="#" icon={BsTwitter} />
                            <FooterIcon href="#" icon={BsGithub} />
                            <FooterIcon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </footer>
    );
}
