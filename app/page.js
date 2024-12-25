"use client";

import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <main className="flex justify-center items-center min-h-screen -m-5 font-serif">
        <div className="text-center pt-10">
          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/images/fotosendiri.jpg"
              alt="foto"
              width={300}
              height={300}
              className="rounded-full animate-bounce-once"
            />
            <h1 className="text-2xl">
              Hello Everyone my name is <strong className="text-5xl text-lime-600">Felix</strong> <span className="text-5xl">!</span>
            </h1>
          </div>

          {/* My Contact*/}
          <div className="mt-4 flex justify-center items-center space-x-4">
            <h3 className="text-xl">My Contact <span className="text-xl font-bold">{'>'}</span></h3>
            {/* Instagram */}
            <a href="https://www.instagram.com/felixwili62?igsh=MWdsdjhqcm1qMnMwZg=="target="_blank">
              <Image
                src="/iconContact/instagram.png"
                alt="Instagram"
                width={60}
                height={60}
                className="rounded-full  animate-bounce-once"
              />
            </a>
            {/* Github */}
            <div className="-mr-3.5">
              <a href="https://github.com/FelixHu03"target="_blank">
                <Image
                  src="/iconContact/logoGithub.png"
                  alt="github"
                  width={60}
                  height={60}
                  className="rounded-full  animate-bounce-once"
                />
              </a>
            </div>

            {/* facebook */}
            <div className="-mr-3.5">
              <a href="https://www.facebook.com/share/5vJbTijyPZwc4izM/" target="_blank">
                <Image
                  src="/iconContact/facebook.png"
                  alt="facebook"
                  width={85}
                  height={85}
                  className="rounded-full  animate-bounce-once"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
