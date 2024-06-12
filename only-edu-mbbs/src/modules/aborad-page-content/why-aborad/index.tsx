import React from "react";
import FlowDiagram from "../flow-diagram";
import { HeaderProps, QnaProps } from "@/types/types";
// Removed unused import 'parse'

interface Props {
  data: {
    id: number;
    qna: QnaProps[];
    header: HeaderProps;
  };
}

const WhyAbroad = ({ data }: Props) => {
  return (
    <>
      {/* <section className="text-dark dark:text-light mt-6">
        <h4 className="text-center text-4xl pt-6  ">{data.header.title}</h4>
        <p className="text-center  pt-1 mb-6 ">{data.header.description}</p>
        <div className="px-6 sm:px-12 flex flex-col gap-y-4 max-w-7xl mx-auto prose">
          <ol className="flex flex-col gap-y-10">
            {data.qna.map((item) => (
              <li key={item.id}>
                <h4 className="leading-8 text-3xl mb-3 mt-0">
                  {item.Question}
                </h4>
                <p className="text-sm text-accent">{item.Answer}</p>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      <section className=" dark:text-light  text-dark py-12 ">
        <div className="px-6 container mx-auto">
          <h1 className="text-5xl font-semibold">{data.header.title}</h1>
          <p>{data.header.description}</p>
          <div className="md:grid md:grid-cols-2">
            <div className="h-full items-center justify-center flex">
              <svg
                className="md:w-[400px] md:h-[400px] h-[300px] w-[300px] "
                viewBox="0 0 154 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-dark dark:fill-light"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M67.561 65.5079C67.4537 65.7148 67.1394 67.8074 68.3735 67.8074C68.5891 67.8079 68.7977 67.7307 68.961 67.5899C69.1242 67.4491 69.2314 67.2542 69.2627 67.0409C69.5233 64.6953 67.9902 64.703 67.561 65.5079ZM78.6757 65.4772C78.7447 66.2897 78.8367 67.0103 79.6492 67.0103C79.8648 67.0107 80.0733 66.9335 80.2366 66.7927C80.3999 66.6519 80.507 66.457 80.5384 66.2437C80.5549 65.7505 80.5007 65.2575 80.3774 64.7797C79.9328 63.9595 78.5607 64.1588 78.6757 65.4772ZM73.31 72.8819C73.5476 72.8819 75.6096 72.7822 76.0925 72.4066C76.2381 72.2993 76.2228 72.0924 76.2228 71.9007C76.1768 69.7264 75.9667 67.5586 75.5942 65.4159C75.5942 65.3009 75.4946 65.2779 75.4333 65.2932C75.3719 65.3086 75.3413 65.4159 75.3489 65.5998C75.3489 66.2284 75.2953 66.443 75.5176 69.9614C75.6632 72.261 75.6019 71.6171 75.6479 72.0004C74.9291 72.2637 74.191 72.4713 73.4403 72.6213C72.942 72.7286 73.2946 72.8819 73.31 72.8819ZM75.7322 78.1863C75.1635 78.4912 74.5364 78.6715 73.8925 78.7152C73.86 78.7152 73.8288 78.7281 73.8058 78.7511C73.7828 78.7741 73.7699 78.8053 73.7699 78.8378C73.7699 78.8703 73.7828 78.9015 73.8058 78.9245C73.8288 78.9475 73.86 78.9605 73.8925 78.9605C74.2527 79.09 74.6374 79.1366 75.018 79.0968C75.3986 79.0571 75.7654 78.932 76.091 78.7309C76.4166 78.5298 76.6927 78.2578 76.8987 77.9353C77.1046 77.6127 77.2352 77.2478 77.2806 76.8678C77.2846 76.8522 77.2855 76.836 77.2833 76.82C77.281 76.8041 77.2757 76.7887 77.2675 76.7748C77.2593 76.761 77.2485 76.7488 77.2356 76.7391C77.2227 76.7295 77.2081 76.7224 77.1924 76.7184C77.1768 76.7143 77.1606 76.7134 77.1446 76.7157C77.1287 76.7179 77.1133 76.7233 77.0995 76.7315C77.0856 76.7397 77.0734 76.7505 77.0638 76.7634C77.0541 76.7763 77.047 76.7909 77.043 76.8065C76.7326 77.372 76.281 77.8473 75.7322 78.1863ZM41.3763 19.0714C43.3463 25.6559 50.3141 25.334 51.1266 25.8246C51.1266 25.9012 52.721 32.0411 53.3648 32.8843C53.7251 33.3519 54.5913 33.1679 55.1662 33.0606C56.5153 32.7923 58.079 32.708 59.2211 31.7958C59.5124 31.5582 59.3438 30.5924 59.2671 30.2628C59.0232 28.8845 58.6851 27.5246 58.2553 26.1925C58.0863 25.7906 57.9429 25.3784 57.8261 24.9584C58.355 24.4898 58.9303 24.0763 59.5431 23.7243C60.5545 23.0353 61.4542 22.1951 62.2106 21.233C63.6742 19.0889 64.3359 16.4977 64.0793 13.9143C63.8228 11.3309 62.6646 8.92038 60.8079 7.10589C55.1279 1.53321 44.8564 3.34989 41.5219 10.379C40.3798 12.8165 40.6021 16.5112 41.3763 19.0714ZM58.8685 31.4279C57.849 32.2481 56.3466 32.3554 55.0359 32.6237C54.6833 32.7003 53.8478 32.9073 53.6255 32.6237C53.1917 31.9976 52.8797 31.2955 52.7056 30.5541C54.6912 30.2742 56.6332 29.7436 58.4853 28.975C58.7358 29.7687 58.865 30.5956 58.8685 31.4279ZM58.401 28.6607C56.4423 29.0258 54.5188 29.5592 52.652 30.2551C52.454 29.3655 52.1979 28.4897 51.8854 27.6336C53.8659 27.4262 55.8082 26.9464 57.6574 26.2078C57.9667 27.0181 58.2227 27.8477 58.4239 28.6914L58.401 28.6607ZM42.0049 10.6166C45.2166 3.97845 55.0359 2.29974 60.4016 7.55048C62.1456 9.26105 63.2366 11.5276 63.4857 13.9577C63.7349 16.3878 63.1266 18.8285 61.766 20.8574C60.4399 22.7278 57.7571 24.0156 57.3431 24.6901C57.1975 24.9277 57.4658 25.5333 57.6344 25.9625C56.7606 26.1312 55.8024 26.3381 54.9439 26.5298C54.7139 25.4796 53.6408 21.2407 53.2422 20.2442C53.0889 19.8456 52.9509 19.8763 52.5447 19.9913C50.3064 19.9913 47.8458 19.424 47.0563 17.3161C46.9609 17.069 46.894 16.8118 46.857 16.5495C46.7497 15.4457 47.6235 14.158 48.5894 14.25C48.4514 15.0931 48.5894 16.7029 49.3099 17.1858C50.0304 17.6687 50.843 16.9022 50.843 16.2123C50.8021 15.7148 50.6404 15.2348 50.3719 14.814C50.1034 14.3932 49.7362 14.0444 49.3022 13.7977C49.4227 13.5241 49.6013 13.2799 49.8256 13.0821C50.0498 12.8844 50.3144 12.7377 50.601 12.6524C50.8876 12.5671 51.1893 12.5451 51.4852 12.588C51.7811 12.6309 52.0641 12.7377 52.3147 12.9009C51.7091 14.0813 52.3147 16.7872 53.3878 16.151C54.461 15.5147 54.1084 13.951 53.4415 13.0848C53.1196 12.6632 53.0506 12.7782 53.2115 12.6556C54.461 11.7434 55.8791 12.8012 56.477 14.1886C57.3355 16.0973 55.4958 18.4505 54.3307 19.1634C54.3022 19.1807 54.2818 19.2086 54.2739 19.2409C54.266 19.2733 54.2712 19.3074 54.2885 19.3359C54.3058 19.3643 54.3337 19.3848 54.366 19.3927C54.3984 19.4006 54.4325 19.3953 54.461 19.378C55.8867 18.5425 57.6881 16.082 56.8679 14.0123C56.0477 11.9427 53.9857 11.1455 52.6826 12.3796C52.3545 12.1545 51.9801 12.0058 51.5869 11.9446C51.1937 11.8834 50.7918 11.9112 50.4108 12.026C50.0297 12.1407 49.6793 12.3395 49.3853 12.6077C49.0913 12.8758 48.8612 13.2065 48.712 13.5754C47.2863 13.3914 46.0828 15.0548 46.2438 16.5649C46.3304 17.2323 46.5826 17.8674 46.9776 18.4124C47.3726 18.9573 47.8977 19.3947 48.505 19.6847C49.2256 20.0296 51.7858 20.6581 52.7976 20.3669C53.1502 21.1334 54.4303 25.6329 54.6603 26.5758C51.2569 27.3423 51.9468 27.7026 51.7781 27.2043C51.5788 26.5834 51.4562 25.6713 51.2875 25.6099C47.0563 24.6518 43.239 23.9466 41.8132 18.9258C41.1157 16.4959 40.9317 12.8932 42.0049 10.6166ZM49.1183 14.4033C49.4087 14.6094 49.6515 14.8755 49.83 15.1837C50.0086 15.4918 50.1187 15.8348 50.1531 16.1893C50.1531 16.3962 49.6855 16.9558 49.3866 16.3426C49.1577 15.7234 49.0763 15.0594 49.1489 14.4033H49.1183ZM52.7363 13.2305C53.3495 13.8284 53.7328 15.2234 53.0659 15.6297C52.8347 15.28 52.6851 14.8829 52.6281 14.4676C52.571 14.0523 52.608 13.6295 52.7363 13.2305ZM29.7404 42.4889C32.8602 41.5154 36.6391 42.3586 38.0956 45.808C40.6174 51.649 33.9486 54.6231 34.0176 54.9297C34.1709 55.6963 34.4469 57.0377 34.5618 57.8119C34.571 57.8769 34.6056 57.9357 34.6581 57.9752C34.7106 58.0148 34.7766 58.0318 34.8416 58.0227C34.9067 58.0135 34.9654 57.9789 35.005 57.9265C35.0445 57.874 35.0616 57.808 35.0524 57.7429C34.9604 56.9764 34.8608 55.8726 34.7535 55.0754C35.8373 54.6406 36.8401 54.0265 37.72 53.2587C43.1317 46.8735 37.0914 38.8173 29.3724 41.3391C28.1502 41.6955 27.0692 42.4235 26.2794 43.4221C25.4896 44.4207 25.0302 45.6403 24.9649 46.9118C24.7196 49.932 27.1265 52.5382 31.0128 52.2009C31.0714 52.1906 31.1245 52.1599 31.1627 52.1144C31.2009 52.0688 31.2219 52.0112 31.2219 51.9518C31.2219 51.8923 31.2009 51.8347 31.1627 51.7891C31.1245 51.7436 31.0714 51.713 31.0128 51.7026C27.5634 51.8789 25.7161 49.403 26.0457 47.0268C26.1221 45.9829 26.5175 44.9877 27.1783 44.176C27.8392 43.3643 28.7336 42.7753 29.7404 42.4889ZM86.9925 22.4902C87.0576 22.5074 87.1269 22.4982 87.1851 22.4644C87.2433 22.4306 87.2857 22.3751 87.303 22.31C87.3203 22.245 87.311 22.1757 87.2772 22.1175C87.2434 22.0593 87.1879 22.0169 87.1229 21.9996C83.8038 21.0644 82.8456 18.1286 83.9188 15.9746C84.3367 15.0126 85.0404 14.2025 85.9344 13.654C86.8285 13.1055 87.8696 12.8452 88.9165 12.9085C94.6808 13.0542 97.2104 18.3586 95.0488 22.1452C93.6154 24.7361 91.699 25.4336 89.2461 25.7556C89.1687 25.7665 89.0969 25.8023 89.0415 25.8576C88.9862 25.9129 88.9504 25.9847 88.9395 26.0622C88.8552 26.7674 88.6712 28.1548 88.5333 28.9597C88.5201 29.0237 88.5328 29.0904 88.5688 29.145C88.6047 29.1996 88.6609 29.2377 88.7249 29.251C88.7889 29.2642 88.8556 29.2514 88.9102 29.2155C88.9649 29.1795 89.003 29.1234 89.0162 29.0593C89.1925 28.2315 89.4301 27.258 89.5911 26.4378C90.7556 26.3752 91.9011 26.116 92.9791 25.6713C95.5777 24.1382 97.1567 21.716 96.9498 18.6498C96.4669 11.4521 85.9654 8.87658 82.9453 15.5837C81.7725 18.3126 83.1982 21.6316 86.9925 22.4902ZM129.581 58.4558C129.493 57.0349 128.986 55.6719 128.125 54.5388C127.296 53.606 126.284 52.8528 125.153 52.3255C124.022 51.7982 122.795 51.5079 121.548 51.4727C120.278 51.4138 119.021 51.751 117.951 52.4377C116.882 53.1243 116.052 54.1264 115.576 55.3053C114.373 58.0878 115.822 61.3303 119.601 62.2501C119.634 62.2653 119.671 62.2729 119.708 62.2724C119.745 62.2719 119.781 62.2633 119.815 62.2473C119.848 62.2312 119.877 62.2081 119.9 62.1795C119.924 62.1509 119.941 62.1175 119.95 62.0817C119.959 62.0459 119.96 62.0086 119.953 61.9723C119.946 61.936 119.931 61.9017 119.91 61.8717C119.888 61.8417 119.86 61.8168 119.828 61.7988C119.796 61.7807 119.76 61.7699 119.723 61.7672C116.427 60.7707 115.446 57.9345 116.527 55.7423C116.945 54.7803 117.649 53.9701 118.543 53.4216C119.437 52.8731 120.478 52.6129 121.525 52.6761C122.588 52.7057 123.634 52.9505 124.6 53.3958C125.565 53.8411 126.431 54.4777 127.143 55.267C127.861 56.2041 128.288 57.3317 128.37 58.5094C128.914 65.2702 121.632 65.2932 121.563 65.8298C121.471 66.5963 121.302 67.9454 121.157 68.7273C121.144 68.7913 121.156 68.858 121.192 68.9126C121.228 68.9672 121.284 69.0054 121.348 69.0186C121.412 69.0318 121.479 69.019 121.534 68.9831C121.588 68.9471 121.627 68.891 121.64 68.8269C121.824 68.0067 122.054 67.0256 122.215 66.2054C123.381 66.1399 124.529 65.8808 125.61 65.4389C128.171 63.9365 129.788 61.5526 129.581 58.4558ZM37.9729 63.6222C38.3025 62.2578 37.3137 60.8244 36.3325 60.9393C35.6962 60.8705 35.0554 60.8526 34.4162 60.8857C32.7528 61.2843 31.971 63.4612 33.5347 64.5267C35.3284 65.7225 37.651 64.8946 37.9729 63.6222ZM36.7848 63.4689C36.5126 63.696 36.1791 63.8374 35.8266 63.8751C33.7417 64.1664 33.2971 62.3421 34.6998 61.7442L36.3479 61.4376C37.0607 61.4989 37.2217 63.0243 36.7848 63.4306V63.4689ZM87.8971 31.8878C86.111 31.2363 84.1794 33.2522 85.4442 34.9539C86.7089 36.6556 89.2155 36.6556 89.936 35.5212C90.6566 34.3867 90.2196 32.6697 89.2538 32.4551C89.1695 32.4167 88.5026 32.1101 87.8971 31.8878ZM88.8629 34.9539C88.52 35.0706 88.1527 35.0967 87.7968 35.0295C87.4409 34.9624 87.1084 34.8043 86.8316 34.5707C86.6051 34.408 86.4189 34.1956 86.2873 33.9498C86.065 33.3289 86.8622 32.6927 87.4448 32.6544L89.1005 32.892C89.7444 33.2369 89.4224 34.7393 88.8629 34.9769V34.9539ZM121.854 72.2687C121.701 72.1997 120.912 71.8701 120.505 71.7168C118.712 71.0652 116.788 73.0812 118.052 74.7829C119.317 76.4846 121.816 76.4846 122.544 75.3501C123.272 74.2156 122.828 72.4833 121.854 72.2687ZM121.463 74.8059C121.12 74.9218 120.753 74.9475 120.398 74.8803C120.042 74.8132 119.709 74.6556 119.432 74.4226C119.208 74.2547 119.022 74.0403 118.888 73.7941C118.673 73.1808 119.463 72.5446 120.045 72.5063L121.701 72.7439C122.345 73.0658 122.023 74.5606 121.463 74.8059Z"
                />
                <path
                  className="fill-dark dark:fill-light"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M115.592 114.551C114.059 107.008 108.095 95.3873 100.936 92.4208L99.4946 89.4083C99.4843 89.3865 99.4694 89.3671 99.451 89.3515C99.4325 89.3359 99.4109 89.3244 99.3877 89.3179C99.3644 89.3113 99.34 89.3099 99.3161 89.3136C99.2923 89.3173 99.2695 89.3261 99.2493 89.3394L97.7162 90.3282C97.2293 87.0745 95.7425 84.0529 93.462 81.6817C95.0564 79.2211 97.6089 78.47 100.246 78.355C102.43 78.263 104.04 78.1327 105.305 76.2623C107.811 72.5677 107.221 68.965 104.278 65.5309C99.7935 60.3032 98.0305 61.8669 95.8459 58.9771C91.6913 53.55 90.7485 45.5245 84.6315 41.3469C76.8129 36.0501 72.597 40.3197 70.9566 41.6382C68.5574 40.1817 63.207 40.6877 60.9074 42.6576C58.9528 44.3287 56.3619 46.4903 55.3577 48.9049C53.2191 54.0023 53.4491 60.0349 50.3216 64.6571C49.5551 65.8069 48.2443 66.5811 47.3168 67.6695C46.0438 69.2657 44.9608 71.0047 44.0897 72.8513C42.9553 74.9976 42.0891 77.3815 43.1239 79.6044C44.5113 82.5786 47.6158 85.4147 50.9272 85.2001C52.8435 85.0698 55.3807 83.92 57.1821 84.6789C58.2552 85.1234 58.6692 86.1583 59.4817 87.0244C61.3214 89.0711 65.6139 89.692 67.9902 88.2739C65.3763 91.6006 61.3903 91.4856 54.4379 95.3183C43.7678 101.19 39.8738 107.859 38.7317 114.689C38.2948 116.813 37.9724 118.96 37.7659 121.12C37.1067 132.257 40.487 146.377 51.4484 148.715C54.4532 149.359 57.895 149.773 60.8691 149.029C66.5031 147.626 73.2256 143.832 78.162 140.751C80.4616 139.317 88.9701 133.576 92.9254 132.825C93.1635 134.87 93.6792 136.874 94.4585 138.781C97.6242 145.288 102.691 149.136 109.789 147.465C114.388 146.385 115.699 141.486 115.822 136.795C118.129 131.843 116.297 118.153 115.592 114.551ZM89.0698 78.6616C90.4342 78.9145 91.3694 80.1946 92.3812 81.2371C95.0564 83.9123 96.896 86.7791 97.4479 90.4355C95.2327 91.8459 93.7916 92.7351 93.7609 92.7811C93.7303 92.8271 92.6648 90.1135 92.0209 89.7839C91.0576 89.3057 90.1838 88.6652 89.4377 87.8906C88.8628 87.2544 88.1576 86.1353 88.2496 85.2921C88.657 85.0753 89.1017 84.9375 89.5603 84.8858V84.4106C87.1918 84.4796 86.3792 86.6412 86.1646 87.1241C86.0113 87.469 85.7967 87.814 85.3061 87.7603C84.8155 87.7066 84.6392 87.1394 84.8232 86.6335C85.0071 86.1276 85.4517 83.9047 88.5868 83.4217C88.6261 83.4162 88.6639 83.403 88.698 83.3829C88.7322 83.3627 88.762 83.336 88.7859 83.3044C88.8097 83.2727 88.8271 83.2366 88.837 83.1982C88.8469 83.1599 88.8492 83.1199 88.8436 83.0806C88.8381 83.0414 88.8249 83.0036 88.8047 82.9694C88.7846 82.9353 88.7579 82.9054 88.7263 82.8816C88.6946 82.8577 88.6585 82.8404 88.6201 82.8305C88.5817 82.8206 88.5418 82.8183 88.5025 82.8238C87.8464 82.9073 87.2104 83.1071 86.6245 83.4141C86.0979 83.6712 85.6304 84.035 85.2517 84.4823C84.873 84.9296 84.5913 85.4507 84.4246 86.0126C84.0566 87.0628 82.7689 86.5952 83.0755 85.6907C83.384 84.8108 83.8431 83.9912 84.4322 83.2684C85.0865 82.6448 85.8723 82.1759 86.7318 81.8963C87.4064 81.6204 87.9813 81.7507 88.1346 81.5284C88.2879 81.3061 87.9276 80.5626 87.7437 80.3403C86.7548 79.1598 83.911 80.1793 82.8225 78.8609C82.125 77.9947 83.5891 77.964 84.1793 77.8874C85.835 77.7034 87.4064 78.3473 89.0698 78.6616ZM91.8829 97.6562C89.6917 98.3704 87.4564 98.9414 85.1911 99.3656C85.9576 95.004 86.4789 91.2633 86.4022 89.9066C88.1882 90.2515 90.2349 90.4968 92.4732 90.8647C93.0787 91.8689 93.4083 92.7121 93.554 92.9497L92.0669 93.8925C91.9902 93.9922 92.0056 93.5783 91.8829 97.6562ZM83.5584 119.801C83.8978 121.273 84.1386 122.766 84.2789 124.27C81.1362 124.071 78.7369 124.109 77.5565 124.063C77.6025 121.909 77.6255 121.242 77.6638 120.79C79.5983 120.3 81.5698 119.969 83.5584 119.801ZM71.5009 100.922C75.8494 100.953 80.1921 100.599 84.4782 99.8638C83.1138 107.223 81.0365 116.068 80.0554 117.839C77.8018 111.691 78.0317 111.668 71.5009 100.922ZM80.6992 117.739C81.941 114.957 83.8267 106.655 85.0838 99.7412C87.3718 99.3123 89.6281 98.7284 91.8369 97.9935C91.5993 106.272 91.5303 116.605 92.0286 124.906C90.5722 124.776 88.4565 124.592 86.4022 124.431C86.2719 123.189 85.7583 118.866 85.3214 117.732C85.2064 117.425 85.0685 117.302 84.5549 117.287C83.273 117.343 81.9971 117.494 80.7376 117.739H80.6992ZM83.4358 88.4962C82.6594 88.0423 82.0393 87.3634 81.6574 86.5492C82.0123 86.6989 82.3824 86.8094 82.7612 86.8788C82.9049 87.0406 83.0903 87.1597 83.2971 87.2233C83.504 87.2868 83.7243 87.2923 83.934 87.2391C84.2789 87.1317 84.0566 87.0858 84.2406 87.5687C84.3113 87.7632 84.4303 87.9366 84.5865 88.0724C84.7426 88.2082 84.9308 88.302 85.1333 88.3449C85.3358 88.3879 85.5458 88.3785 85.7437 88.3178C85.9416 88.2571 86.1207 88.147 86.2643 87.9979C86.5632 87.7296 86.5862 87.4077 86.9465 86.7178C87.2991 86.6488 87.644 86.5569 87.9813 86.4572C88.8935 88.8488 91.7526 90.0062 91.9519 90.1825C88.5868 89.6843 85.605 89.37 83.4741 88.4962H83.4358ZM68.7414 87.5763C70.581 85.4454 70.2054 83.92 68.3121 82.4099C64.4795 79.4051 64.9547 80.21 63.345 76.8526C61.4517 71.4025 63.0844 62.8174 64.4871 57.2294C64.8704 55.6963 67.4843 54.0559 69.3853 54.3012C72.0221 54.6385 70.9183 56.0259 73.1719 56.8155C73.5631 56.9298 73.9678 56.9917 74.3754 56.9994C74.3995 57.007 74.4249 57.0097 74.4501 57.0074C74.4753 57.0052 74.4999 56.9979 74.5223 56.9862C74.5447 56.9745 74.5646 56.9584 74.5808 56.939C74.597 56.9195 74.6093 56.8971 74.6168 56.873C74.6244 56.8488 74.6271 56.8234 74.6248 56.7982C74.6226 56.773 74.6153 56.7484 74.6036 56.726C74.5918 56.7036 74.5758 56.6837 74.5564 56.6675C74.5369 56.6513 74.5145 56.639 74.4903 56.6315C73.2948 55.9144 72.1928 55.0519 71.2096 54.0636C71.6772 52.155 72.8653 51.1125 75.0959 51.0971C76.629 51.0971 77.8401 52.2623 78.9286 53.2588C80.247 54.4622 81.6651 57.7123 81.5578 59.4983C81.3153 61.5678 81.8004 63.6573 82.9298 65.4083C83.6964 66.742 85.1375 67.8995 85.996 69.0263C86.4712 69.6549 86.1953 72.4604 85.9193 73.6945C85.559 74.7753 84.7925 76.8372 84.6162 77.3048C81.4121 77.4198 81.5501 79.1368 83.0831 79.8727C81.6497 81.5897 78.1467 83.4984 80.6532 85.9053C81.1898 87.0321 82.0483 88.5728 83.1981 89.0404C84.014 89.3711 84.8581 89.6277 85.72 89.8069C85.8887 90.9951 85.3368 94.9274 84.4936 99.5035C80.0943 100.235 75.6382 100.571 71.1789 100.508C68.4118 95.9775 65.6599 91.6849 64.9624 90.9951C66.5111 90.2077 67.827 89.0292 68.7797 87.5763H68.7414ZM63.5136 91.6159C65.0467 91.041 64.2802 91.1407 64.6481 91.4243C65.016 91.7079 67.5456 95.7169 70.4814 100.477C67.0013 100.423 63.0844 100.163 61.605 99.9941C62.0496 99.6415 60.8998 93.5859 60.4552 92.8194C61.5666 92.3748 62.5938 91.9839 63.552 91.6159H63.5136ZM59.8879 93.057C60.5182 95.3141 60.9466 97.6228 61.168 99.9558C57.8605 99.4817 54.616 98.6411 51.4944 97.4492C54.1694 95.7383 56.9911 94.2684 59.9263 93.057H59.8879ZM60.5855 148.477C57.711 149.198 54.3459 148.776 51.4484 148.155C46.9182 147.182 43.7831 144.154 41.7442 140.275C38.5017 134.143 37.5359 125.029 38.5247 118.644C38.724 117.364 38.977 116.099 39.1916 114.811C40.4104 107.506 44.8486 102.002 51.0422 97.8402C57.1208 100.071 61.2064 100.853 70.7573 100.906C77.3725 111.638 77.5181 112.711 79.4115 117.962C78.8289 118.069 76.1307 118.613 75.6708 118.989C75.4868 119.134 75.4868 119.426 75.6708 124.033C68.6954 124.171 61.8733 125.259 55.4574 129.398C54.6909 123.872 55.5724 122.201 57.3584 119.035C60.1639 114.06 59.658 113.14 57.8873 110.312C57.5954 109.93 57.3865 109.491 57.2741 109.024C57.2741 108.84 56.5075 108.587 57.5883 110.488C59.1214 113.278 59.5353 113.937 56.8218 118.728C54.8365 122.239 54.024 124.04 55.2198 129.559C54.6832 129.919 54.07 130.326 53.4797 130.801C52.578 131.436 51.7318 132.146 50.9502 132.924C50.9349 132.954 50.932 132.988 50.9421 133.02C50.9522 133.051 50.9744 133.078 51.0038 133.093C51.0333 133.108 51.0677 133.111 51.0993 133.101C51.1309 133.091 51.1572 133.069 51.1725 133.039C51.4101 132.618 55.3731 129.973 56.4386 129.429C62.3868 126.432 68.9637 123.841 79.7334 124.554C79.5977 129.111 80.0695 133.666 81.1362 138.098C75.6018 141.594 67.7372 146.699 60.6238 148.477H60.5855ZM81.6114 137.792C80.6266 133.469 80.1914 129.039 80.316 124.607C91.9519 125.374 88.3032 125.129 92.0592 125.374C92.1972 127.612 92.4042 130.042 92.7108 132.273C89.706 132.832 84.3019 136.128 81.6497 137.792H81.6114ZM109.467 146.913C102.699 148.516 97.8925 144.821 94.8417 138.566C91.469 131.667 92.0286 101.703 92.2202 94.0688L99.2263 89.7303C108.685 110.158 109.82 112.09 111.943 118.858C114.687 127.482 118.305 144.875 109.505 146.913H109.467ZM115.645 135.186C115.468 131.081 114.835 127.009 113.76 123.044C111.33 113.592 108.701 108.855 101.426 93.5629L101.641 93.448C108.064 96.882 113.507 107.544 114.933 114.666C115.714 118.383 117.209 130.54 115.684 135.186H115.645Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" w-full h-full">
              <ol className="flex flex-col gap-y-10">
                {data.qna.map((item) => (
                  <li key={item.id}>
                    <h4 className="leading-8 text-3xl  mb-3">
                      {item.Question}
                    </h4>
                    <p className="text-sm text-accent">{item.Answer}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FlowDiagram />
    </>
  );
};

export default WhyAbroad;
