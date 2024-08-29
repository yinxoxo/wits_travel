import { useState } from "react";
import { Link } from "react-router-dom";

export default function BackstageNav() {
  const [isOverviewMenuOpen, setIsOverviewMenuOpen] = useState(true);
  const [isDataMenuOpen, setIsDataMenuOpen] = useState(false);

  const toggleOverview = () => {
    setIsOverviewMenuOpen(!isOverviewMenuOpen);
  };
  const toggleDataManage = () => {
    setIsDataMenuOpen(!isDataMenuOpen);
  };

  return (
    <>
      <div className="flex h-screen w-48 flex-col gap-8 bg-[#dff1f772] px-5 pt-6 shadow-lg shadow-slate-100">
        <div className="flex flex-col">
          <div className="mb-1 flex items-center" onClick={toggleOverview}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>

            <h1 className="ml-2 text-base">總覽</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-auto mt-1 size-6 transform transition-transform duration-500"
              style={{
                transform: isOverviewMenuOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {isOverviewMenuOpen && (
            <div className="transition-all duration-500 ease-in-out">
              <Link
                className="my-2 flex items-center hover:bg-[#c9d4be8f] active:bg-[#c9d4be8f]"
                to="/backstage"
              >
                <h2 className="ml-10 py-2 text-base">數據分析</h2>
              </Link>
              <Link
                className="my-2 flex items-center hover:bg-[#c9d4be8f] active:bg-[#c9d4be8f]"
                to="/"
              >
                <h2 className="ml-10 py-2 text-base">前台網站</h2>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-1 flex items-center" onClick={toggleDataManage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>

            <h1 className="ml-2 text-base">資料管理</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-auto mt-1 size-6 transform transition-transform duration-500"
              style={{
                transform: isDataMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {isDataMenuOpen && (
            <div className="transition-all duration-500 ease-in-out">
              <Link
                className="my-2 flex items-center hover:bg-[#c9d4be8f] active:bg-[#c9d4be8f]"
                to="/backstage/spot-manage"
              >
                <h2 className="ml-10 py-2 text-base">編輯景點</h2>
              </Link>
              <Link
                className="my-2 flex items-center hover:bg-[#c9d4be8f] active:bg-[#c9d4be8f]"
                to="/backstage/carousel-manage"
              >
                <h2 className="ml-10 py-2 text-base">編輯輪播圖</h2>
              </Link>
              <Link
                className="my-2 flex items-center hover:bg-[#c9d4be8f] active:bg-[#c9d4be8f]"
                to="/backstage/form-manage"
              >
                <h2 className="ml-10 py-2 text-base">聯絡表單</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
