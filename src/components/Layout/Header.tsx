import { ButtonBlack, ButtonWhite } from "../common";
import { Search } from "lucide-react"

export function Header() {
    return (
        <header className="flex flex-wrap justify-center items-center gap-[25px]">
            <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path></svg>

            <span>Explore</span>
            <span>Directory</span>
            <span>Academy</span>
            <span>Jobs</span>
            <span>Market</span>

            <form className="bg-custom-light-gray rounded-md flex justify-start align-center gap-[9px] px-[18px] w-[300px] py-[4px] shadow-xs shadow-custom-light-gray">
                <button type="submit" className="py-[6px]"> <Search size={15} type="submit" className="font-extrathin" /></button>
                <input type="text" className="py-[6px] placeholder:text-[13px] placeholder:text-black" placeholder="Search by inspiration" />
            </form>

            <span>Login</span>
            <span>Sign up</span>
            <ButtonBlack>
                Be Pro
            </ButtonBlack>
            <ButtonWhite>Submit Website</ButtonWhite>
        </header>
    )
} 