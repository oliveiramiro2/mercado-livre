import React, { useState } from "react";

import Menu from "./components/menu";
import FirstLevelHeader from "./components/firstLevelHeader";
import SecondLevelHeader from "./components/secondLevelHeader";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="min-h-[100px] w-screen flex flex-col bg-pallet-yellow pt-2 max-md:pl-0 max-md:pr-0 pl-20 pr-20">
            <FirstLevelHeader showMenu={showMenu} setShowMenu={setShowMenu} />
            <SecondLevelHeader showMenu={showMenu} />
            {showMenu && <Menu />}
        </header>
    );
};

export default Header;
