import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-white  pb-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Legal Disclaimer Section */}
        <div className="w-full pt-16 border-t border-slate-200 text-slate-600 text-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="text-[12px] leading-[1.35]">
              <img
                src="/trebb.png"
                alt="Toronto Regional Real Estate Board"
                className="h-8 w-auto mx-auto mb-3"
              />
              <p>
                Toronto Real Estate Board (TRREB); All information deemed
                reliable but not guaranteed. All properties are subject to prior
                sale, change or withdrawal. Neither listing broker(s) or
                information provider(s) shall be responsible for any
                typographical errors, misinformation, misprints and shall be
                held totally harmless. Listing(s) information is provided for
                consumer&apos;s personal, non-commercial use and may not be used
                for any purpose other than to identify prospective properties
                consumers may be interested in purchasing. The data relating to
                real estate for sale on this website comes in part from the
                Internet Data Exchange program of the Multiple Listing Service.
                Real estate listings held by brokerage firms other than Team
                Ravi - Elixir Real Estate Inc. Brokerage, may be marked with the
                Internet Data Exchange logo and detailed information about those
                properties will include the name of the listing broker(s) when
                required by the MLS. Copyright &copy;2026 All rights reserved.
              </p>
            </div>
            <div className="text-[12px] leading-[1.35]">
              <img
                src="/mls.png"
                alt="MLS and REALTOR logos"
                className="h-7 w-auto mx-auto mb-3"
              />
              <p>
                The listing data displayed is deemed reliable but is not
                guaranteed accurate by CREA&reg;. The trademarks REALTOR&reg;,
                REALTORS&reg;, and the REALTOR&reg; logo are controlled by The
                Canadian Real Estate Association (CREA&reg;) and identify real
                estate professionals who are members of CREA&reg;. Used under
                license. The trademarks MLS&reg;, Multiple Listing Service&reg;
                and the associated logos are owned by The Canadian Real Estate
                Association (CREA&reg;) and identify the quality of services
                provided by real estate professionals who are members of
                CREA&reg;. Used under license.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 pt-2 border-t border-slate-200 pb-3">
            <p className="max-w-4xl mx-auto leading-[1.35] text-[12px]">
              The REALTOR&reg; trademark is controlled by The Canadian Real
              Estate Association (CREA) and identifies real estate professionals
              who are members of CREA. The trademarks MLS&reg;, Multiple Listing
              Service&reg; and the associated logos identify professional
              services rendered by REALTOR&reg; members of CREA to effect the
              purchase, sale and lease of real estate as part of a cooperative
              selling system.
            </p>
            <img
              src="crea.svg"
              alt="CREA"
              className="h-7 w-auto mx-auto mt-5 mb-3"
            />
            <p className="text-sm text-slate-700 text-center">
              Powered by YOAPress.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
