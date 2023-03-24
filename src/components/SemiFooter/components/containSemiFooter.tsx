import React from "react";

import { IPropsSemiFooter } from "../../../interfaces";

const ContainSemiFooter: React.FC<IPropsSemiFooter> = ({ text }) => (
    <li>
        <a
            href="https://www.mercadolivre.com.br/"
            className="font-proxima text-[#999] font-light text-sm max-md:text-[10px] hover:underline"
        >
            {text}
        </a>
    </li>
);

export default ContainSemiFooter;
