import React from "react";
import { HeaderProps, QnaProps } from "@/types/types";
interface Props {
  data: {
    header: HeaderProps;
    qna: QnaProps[];
  };
}
const WhyUs = ({ data }: Props) => {
  const { title } = data.header;
  return (
    <section className=" dark:text-light  text-dark mb-12 px-3 my-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold">{title}</h1>
        {/* <p>{description}</p> */}
        <div className="md:grid md:grid-cols-2">
          <div className="h-full items-center justify-center flex">
            <svg
              className="md:w-[400px] md:h-[400px] h-[300px] w-[300px]"
              viewBox="0 0 154 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M117.037 64.8959C116.715 64.8959 116.715 65.4938 117.037 65.4938C117.804 65.4938 128.482 65.3175 129.379 65.1412C129.46 65.129 129.535 65.0878 129.589 65.0252C129.643 64.9626 129.672 64.8827 129.672 64.8001C129.672 64.7175 129.643 64.6377 129.589 64.5751C129.535 64.5125 129.46 64.4713 129.379 64.459C126.565 64.0911 120.134 64.8346 117.037 64.8959ZM121.315 80.5489C120.962 80.5489 121.023 81.1391 121.361 81.1545C123.859 81.2388 127.754 81.1085 130.306 80.9935C130.774 80.9935 130.827 80.2269 130.306 80.2269C127.447 80.2423 124.181 80.2806 121.315 80.5489ZM121.644 54.1106C121.57 54.1138 121.499 54.1439 121.445 54.1952C121.392 54.2466 121.358 54.3158 121.352 54.3898C121.345 54.4639 121.366 54.5378 121.41 54.5979C121.454 54.6579 121.518 54.6999 121.59 54.7162C122.963 54.8848 127.416 55.0611 128.758 54.4939C128.826 54.4598 128.882 54.4044 128.916 54.3358C128.951 54.2673 128.962 54.1895 128.948 54.1141C128.934 54.0388 128.896 53.97 128.84 53.9182C128.783 53.8664 128.711 53.8343 128.635 53.827C126.857 53.7196 124.005 54.2869 121.644 54.1106ZM112.89 68.9203C119.36 68.8283 126.688 68.3761 133.219 67.7782C133.625 67.7782 133.587 67.0116 133.165 67.0116C126.742 67.1726 119.237 67.5942 112.852 68.2534C112.763 68.2585 112.681 68.2985 112.622 68.3646C112.563 68.4308 112.532 68.5176 112.538 68.606C112.543 68.6945 112.583 68.7773 112.649 68.8362C112.715 68.8951 112.802 68.9254 112.89 68.9203ZM122.165 34.7782C123.967 34.6402 125.768 34.5329 127.531 34.3183C128.037 34.2646 127.907 33.5517 127.409 33.5517C125.615 33.6897 123.821 33.9197 122.043 34.1266C121.629 34.1726 121.744 34.8089 122.165 34.7782ZM111.648 50.7684C111.265 50.7684 111.25 51.42 111.648 51.4506C115.982 51.6525 120.324 51.3489 124.588 50.5461C125.071 50.4618 124.994 49.6952 124.503 49.7796C120.258 50.5036 115.955 50.8346 111.648 50.7684ZM125.914 38.45C126.581 38.6109 126.68 37.5224 126.067 37.6298C123.075 38.1148 120.043 38.3022 117.014 38.1893C116.608 38.1893 116.516 38.7796 116.93 38.8256C119.927 39.1265 122.952 39 125.914 38.45ZM109.31 68.56C108.712 68.3301 105.953 68.7134 105.179 68.7977C104.803 68.7977 104.788 69.4032 105.179 69.3956L108.314 69.2959C109.763 69.2423 109.755 68.7363 109.31 68.56ZM112.476 101.729C111.832 101.575 107.256 101.92 106.505 101.966C106.106 101.966 106.183 102.58 106.581 102.572C107.394 102.572 111.848 102.572 112.553 102.35C112.867 102.242 112.76 101.79 112.476 101.729ZM106.497 98.4861C108.651 98.5858 113.986 98.6778 116.14 98.1642C116.191 98.1638 116.24 98.1529 116.286 98.1321C116.332 98.1114 116.373 98.0812 116.406 98.0436C116.44 98.0061 116.465 97.9619 116.481 97.914C116.496 97.8661 116.501 97.8155 116.496 97.7654C116.49 97.7154 116.475 97.667 116.449 97.6235C116.424 97.5799 116.39 97.5421 116.349 97.5125C116.309 97.4829 116.262 97.4622 116.213 97.4516C116.164 97.4411 116.113 97.441 116.064 97.4513C112.913 97.4513 109.993 97.9802 106.589 97.8422C106.183 97.8269 106.075 98.4632 106.497 98.4861ZM113.933 84.8569C114.393 84.7726 114.354 84.0903 113.871 84.0903C110.468 84.4353 109.755 84.5196 106.267 84.6576C105.93 84.6576 105.892 85.2402 106.267 85.2632C108.829 85.4333 111.403 85.2969 113.933 84.8569ZM118.655 80.0353C114.485 80.1886 110.154 80.8938 105.8 81.0471C105.722 81.0591 105.651 81.0985 105.6 81.1583C105.548 81.2181 105.52 81.2942 105.52 81.3729C105.52 81.4517 105.548 81.5278 105.6 81.5875C105.651 81.6473 105.722 81.6867 105.8 81.6987C109.41 81.6987 115.22 81.5301 118.739 80.7482C118.812 80.7157 118.873 80.6605 118.913 80.5908C118.953 80.521 118.969 80.4403 118.96 80.3606C118.95 80.2809 118.916 80.2063 118.861 80.1477C118.806 80.0892 118.734 80.0498 118.655 80.0353ZM132.859 99.8506C132.797 99.8506 128.589 100.196 127.869 100.173C127.8 100.185 127.738 100.219 127.69 100.269C127.643 100.32 127.613 100.385 127.605 100.453C127.598 100.522 127.612 100.592 127.647 100.652C127.682 100.712 127.736 100.759 127.8 100.786C128.658 100.947 132.276 101.008 133.02 100.38C133.057 100.338 133.083 100.288 133.095 100.234C133.108 100.179 133.106 100.123 133.089 100.069C133.073 100.016 133.043 99.9679 133.003 99.9295C132.963 99.8912 132.913 99.864 132.859 99.8506ZM134.216 83.1322C128.903 83.4771 122.97 83.6764 117.681 84.1287C117.267 84.1287 117.344 84.7496 117.742 84.7726C120.602 84.8569 130.774 84.3356 134.285 83.891C134.335 83.8872 134.383 83.8734 134.428 83.8504C134.473 83.8273 134.512 83.7956 134.545 83.757C134.577 83.7184 134.601 83.6737 134.615 83.6257C134.63 83.5776 134.635 83.5271 134.629 83.4771C134.62 83.3767 134.571 83.2842 134.493 83.2196C134.416 83.155 134.316 83.1236 134.216 83.1322ZM114.262 65.7008C114.364 65.7008 114.461 65.6604 114.533 65.5886C114.605 65.5167 114.646 65.4192 114.646 65.3175C114.646 65.2159 114.605 65.1184 114.533 65.0465C114.461 64.9746 114.364 64.9343 114.262 64.9343C110.958 65.0186 107.624 65.0416 104.297 65.2945C104.226 65.3104 104.162 65.3502 104.116 65.4074C104.07 65.4645 104.045 65.5356 104.045 65.6088C104.045 65.6821 104.07 65.7531 104.116 65.8103C104.162 65.8674 104.226 65.9072 104.297 65.9231C107.639 65.9844 110.958 65.8081 114.262 65.7008ZM127.332 96.6464C126.167 96.6464 121.966 96.9454 120.97 97.1217C120.648 97.1754 120.602 97.7043 120.97 97.7196C122.05 97.7733 126.228 97.505 127.439 97.3977C127.907 97.413 127.807 96.6464 127.332 96.6464ZM125.094 100.947L115.458 101.56C115.021 101.56 115.128 102.227 115.558 102.204C117.428 102.12 123.446 101.882 125.132 101.652C125.508 101.606 125.515 100.947 125.094 100.947ZM118.195 34.3183C115.366 33.9963 106.489 34.5329 103.477 34.8395C103.063 34.8778 103.032 35.5217 103.477 35.4834C108.429 35.1615 113.25 35.0541 118.202 35.0695C118.289 35.051 118.366 35.0032 118.422 34.9342C118.477 34.8652 118.506 34.7792 118.506 34.6907C118.505 34.6023 118.473 34.5169 118.417 34.449C118.36 34.3811 118.281 34.3349 118.195 34.3183ZM119.015 55.0074C119.498 54.9384 119.321 54.2409 118.839 54.2409C113.905 54.803 108.941 55.059 103.975 55.0074C103.903 55.0189 103.838 55.0557 103.79 55.1112C103.743 55.1667 103.717 55.2373 103.717 55.3102C103.717 55.3832 103.743 55.4537 103.79 55.5092C103.838 55.5647 103.903 55.6015 103.975 55.613C108.996 55.8548 114.029 55.6522 119.015 55.0074ZM113.81 38.9559C113.86 38.9511 113.909 38.9364 113.954 38.9125C113.999 38.8887 114.038 38.8562 114.07 38.817C114.102 38.7778 114.126 38.7327 114.141 38.6841C114.155 38.6356 114.16 38.5847 114.155 38.5343C114.15 38.4839 114.135 38.4349 114.112 38.3902C114.088 38.3455 114.055 38.306 114.016 38.2739C113.977 38.2418 113.932 38.2178 113.883 38.2033C113.835 38.1888 113.784 38.184 113.733 38.1893C110.353 38.6109 107.149 38.6263 103.814 38.9176C103.462 38.9559 103.423 39.5308 103.814 39.5461C107.156 39.6002 110.498 39.4028 113.81 38.9559ZM104.312 51.0904C103.929 51.0904 103.921 51.6959 104.358 51.7113C105.734 51.8408 107.117 51.8767 108.498 51.8186C108.56 51.7908 108.613 51.7456 108.65 51.6885C108.687 51.6314 108.707 51.5647 108.707 51.4966C108.707 51.4285 108.687 51.3619 108.65 51.3048C108.613 51.2476 108.56 51.2025 108.498 51.1747C108.36 51.098 105.018 51.0904 104.312 51.0904ZM94.7459 55.5057C95.1905 55.5057 96.8386 52.7768 97.7661 51.8416C98.1034 51.5043 97.5515 50.9371 97.2065 51.259C96.2286 52.1406 95.3819 53.1577 94.6922 54.2792L92.7529 52.4932C92.3543 52.1252 91.8407 52.7538 92.2086 53.1294C92.5766 53.505 94.1786 55.5057 94.7459 55.5057ZM89.5027 42.9879C92.6456 43.1719 95.911 43.1106 99.3605 43.1336C99.6058 43.1336 99.7515 42.4514 99.3605 34.3106C99.3605 33.7203 99.3069 33.2834 99.2992 33.1224C99.3012 33.0987 99.2981 33.0748 99.2902 33.0524C99.2822 33.0299 99.2696 33.0094 99.2532 32.9921C99.0309 32.7545 97.5821 32.7698 94.3243 32.8541C88.8435 32.9845 88.2379 32.9461 88.2379 33.2604C88.2149 33.3217 88.5598 42.896 89.5027 42.9879ZM89.7173 42.4207C89.3341 40.374 89.0581 36.0507 88.8205 33.6284C91.0511 33.7587 96.1334 33.5057 98.6936 33.4444C98.6936 33.4444 98.8316 40.259 98.8929 42.459C95.8881 42.39 92.7529 42.275 89.6867 42.3824L89.7173 42.4207Z"
                className="fill-dark dark:fill-light"
              />
              <path
                d="M100.418 57.5063C101.062 57.2533 100.311 50.1091 100.204 48.231C100.198 48.1924 100.179 48.157 100.15 48.1314C99.69 47.7327 89.9625 48.2617 89.4719 48.3C88.9813 48.3383 89.4719 51.0059 89.5562 52.8226C89.7325 57.3453 89.9395 57.7362 90.1694 57.7669C91.8405 58.0045 98.8851 58.1042 100.418 57.5063ZM89.9395 48.9286C93.2586 48.7139 96.6238 48.6986 99.6133 48.6833C99.69 50.477 99.8126 55.5286 99.966 56.893C96.8418 57.2161 93.6979 57.3058 90.5604 57.1613C90.6907 56.0192 90.0545 50.224 89.9395 48.9286ZM96.1792 68.284L97.9576 66.6742C98.0094 66.5866 98.0322 66.4848 98.0228 66.3834C98.0133 66.282 97.9721 66.1863 97.9049 66.1097C97.8377 66.0332 97.7481 65.9799 97.6488 65.9574C97.5495 65.9348 97.4456 65.9443 97.352 65.9843C96.6238 66.4328 95.9631 66.9825 95.3896 67.6171L93.7952 66.1453C93.7088 66.065 93.5941 66.0223 93.4762 66.0266C93.3583 66.0309 93.247 66.0819 93.1667 66.1683C93.0863 66.2547 93.0437 66.3694 93.048 66.4873C93.0523 66.6052 93.1032 66.7165 93.1896 66.7968L94.7227 68.3299C93.343 69.7864 92.7374 70.6986 92.8754 71.1125C93.0133 71.5265 93.5116 71.3425 93.6419 71.1585C94.1785 70.4993 94.7841 69.7481 95.4356 69.0505C96.0816 69.7557 96.7982 70.3928 97.5743 70.9516C97.6544 70.9723 97.7386 70.9711 97.818 70.948C97.8975 70.925 97.9692 70.8809 98.0257 70.8205C98.0822 70.7601 98.1214 70.6855 98.1391 70.6047C98.1567 70.5239 98.1523 70.4398 98.1262 70.3613C97.5492 69.6048 96.8968 68.9087 96.1792 68.284ZM96.5855 35.422C95.361 36.4928 94.3606 37.7954 93.6419 39.2547C93.0645 38.5635 92.3997 37.9502 91.6642 37.4303C91.2119 37.116 90.6294 37.7139 91.074 38.0512C91.9484 38.824 92.7656 39.6592 93.5193 40.5502C93.7186 40.7571 93.9102 40.6498 94.0788 40.4275C94.9136 38.8012 95.9433 37.2824 97.145 35.9049C97.513 35.4986 96.9841 35.0463 96.5855 35.422ZM96.3402 85.47C96.7388 85.194 98.2565 82.2658 99.1381 81.2693C99.483 80.886 98.8851 80.3571 98.4942 80.7634C97.4448 81.8445 96.545 83.0614 95.8189 84.3815L94.0328 82.8484C93.6419 82.5188 93.1207 83.109 93.5269 83.5C93.9332 83.8909 95.6809 86.0373 96.3402 85.47ZM102.189 95.2972C101.898 94.7223 91.4113 95.2972 91.3116 95.2972C91.2887 95.3 91.2669 95.3085 91.2482 95.3219C91.2294 95.3352 91.2144 95.3531 91.2043 95.3738C90.8517 95.9411 91.2043 105.163 91.4572 106.021C91.7562 107.064 101.921 106.198 102.427 106.244C102.442 106.247 102.458 106.247 102.473 106.243C102.488 106.24 102.502 106.233 102.515 106.224C102.527 106.214 102.537 106.202 102.545 106.189C102.552 106.175 102.556 106.159 102.557 106.144C102.718 104.971 102.227 95.3738 102.189 95.2972ZM91.8022 95.8568C94.8684 95.9871 98.4942 95.7954 101.606 95.7878C101.652 97.0679 101.928 104.58 101.967 105.592C98.5632 105.745 95.7039 105.692 92.0782 105.592C92.1165 104.312 91.8482 97.0219 91.8022 95.8798V95.8568Z"
                className="fill-dark dark:fill-light"
              />
              <path
                d="M95.5045 100.824C96.0488 100.824 98.8313 101.016 99.0536 100.893C99.1122 100.86 99.1623 100.813 99.2 100.757C99.2377 100.702 99.2619 100.638 99.2708 100.571C99.2797 100.504 99.2731 100.436 99.2514 100.372C99.2296 100.309 99.1934 100.251 99.1456 100.203C98.7393 99.7739 96.1714 99.8659 95.7421 99.9502C95.1596 100.057 95.0522 100.28 95.0676 100.448C95.088 100.551 95.1421 100.643 95.2213 100.712C95.3005 100.78 95.4002 100.819 95.5045 100.824ZM96.5394 78.3258C94.0251 78.3718 91.3805 78.4638 90.9435 78.4944C90.7749 78.4944 90.5986 78.6401 90.5756 80.2345C90.5756 82.1432 90.9052 88.1913 91.6718 88.245C93.2049 88.3599 101.131 88.3906 102.15 88.3139C102.311 88.3139 102.442 88.3139 102.15 84.3279C101.99 82.2735 101.629 78.5404 101.629 78.5404C101.599 78.3871 101.583 78.2491 96.5394 78.3258ZM101.054 79.0004C101.238 81.8596 101.338 84.7878 101.645 87.6624H91.8941C91.5951 84.8951 91.3958 82.0436 91.1812 79.1153L101.054 79.0004ZM92.7526 74.0101C95.8648 74.0101 101.07 73.5885 101.116 73.5655C101.606 73.3126 101.116 66.3906 100.955 63.4317C100.955 62.9028 98.2488 62.8952 96.0028 62.9795C95.0216 62.9795 90.1463 63.2401 90.1617 63.9377C90.4223 74.2018 90.361 73.7035 90.5526 73.8108C91.2699 73.998 92.0133 74.0653 92.7526 74.0101ZM91.1352 73.2436C90.9589 70.2234 90.8975 67.0192 90.7749 64.045C93.958 63.7623 97.1542 63.6548 100.349 63.723C100.349 64.7732 100.556 71.7565 100.686 72.9216C99.5519 72.9983 92.3233 73.0519 91.1582 73.2512L91.1352 73.2436Z"
                className="fill-dark dark:fill-light"
              />
              <path
                d="M148.711 85.3551C146.703 30.723 147.546 31.183 147.178 30.861C146.657 30.3704 142.632 30.6924 141.643 30.746L141.229 22.3677C141.249 22.3171 141.256 22.2626 141.251 22.2086C141.245 22.1547 141.226 22.103 141.196 22.0578C141.166 22.0127 141.125 21.9755 141.078 21.9493C141.03 21.9232 140.977 21.9089 140.923 21.9077C124.825 21.7084 108.26 22.7739 91.6489 23.9008C87.1723 24.215 82.5193 24.491 77.966 24.9739C77.9234 24.9671 77.8799 24.9698 77.8384 24.9818C77.797 24.9939 77.7588 25.0149 77.7266 25.0435C77.6943 25.0721 77.6688 25.1075 77.6519 25.1472C77.6349 25.1869 77.627 25.2298 77.6287 25.2729C78.4719 45.7398 80.9249 78.8241 85.1639 115.457C85.2099 115.879 88.7054 115.511 91.8482 115.304C91.8893 116.206 92.0518 117.098 92.3311 117.956C92.7911 118.539 149.654 115.013 149.585 112.591C149.339 103.492 149.01 94.2777 148.711 85.3551ZM144.403 109.256C124.243 112.322 106.114 113.181 85.8691 114.929C81.8601 80.1962 80.212 56.3718 78.2036 25.5105C84.428 25.1426 107.448 23.0269 140.7 22.59C141.528 44.8736 144.61 106.803 144.38 109.256H144.403ZM48.1779 56.5558C47.6566 56.5558 47.6643 57.5676 47.9096 57.9509C47.9379 58.007 47.982 58.0536 48.0365 58.0849C48.091 58.1163 48.1534 58.131 48.2162 58.1272C48.6838 58.0736 48.6608 56.6094 48.1779 56.5558ZM45.4413 60.9864C45.7709 61.0708 46.6601 61.1244 46.8671 60.8178C47.1583 60.3885 46.3688 56.4945 46.2691 56.2185C46.2486 56.1622 46.2088 56.115 46.1567 56.0853C46.1047 56.0556 46.0437 56.0454 45.9848 56.0564C45.9259 56.0675 45.8729 56.0991 45.8351 56.1456C45.7973 56.1921 45.7773 56.2506 45.7786 56.3105C45.7786 57.008 46.0928 59.3767 46.2155 60.3655L45.4489 60.4115C45.3929 60.4354 45.345 60.475 45.3111 60.5256C45.2771 60.5762 45.2587 60.6356 45.2578 60.6965C45.257 60.7574 45.2739 60.8172 45.3065 60.8687C45.3391 60.9202 45.3859 60.9611 45.4413 60.9864ZM47.5263 55.1223C47.7532 55.0602 47.9918 55.0542 48.2215 55.105C48.4512 55.1557 48.6652 55.2617 48.8448 55.4136C49.1437 55.6819 49.7186 55.1683 48.8984 54.6471C48.3082 54.2485 46.9284 54.1105 47.074 54.8157C47.0978 54.9139 47.1573 54.9997 47.2409 55.0564C47.3245 55.1131 47.4263 55.1366 47.5263 55.1223Z"
                className="fill-dark dark:fill-light"
              />
              <path
                d="M70.0015 82.9863C65.0726 78.1264 56.2036 72.4156 48.2315 71.2811C48.3635 70.8255 48.3635 70.3417 48.2315 69.886C48.8383 69.3788 49.4024 68.8224 49.9179 68.2226C51.014 66.9348 50.991 65.6776 49.4273 66.3139C50.9604 62.9257 50.9604 55.5822 50.4085 51.4581C52.9764 53.0602 57.3074 51.5195 56.7785 48.3919C60.2663 49.4421 62.5353 42.5125 58.1046 41.263C58.7255 36.0198 52.0106 35.2609 49.9562 38.3195C48.7987 34.939 43.4789 36.7174 43.8621 39.3697C41.4628 36.794 36.2809 37.6909 35.5604 40.9028C33.3911 38.9327 29.8113 39.7683 30.1256 42.6735C26.6914 41.0791 24.8747 45.1878 27.5423 46.5062C25.8329 47.4261 25.8865 51.2129 28.5081 51.2129C28.5081 53.7425 30.0412 59.5376 33.8357 62.7111C34.2419 66.2602 33.5137 68.0769 32.2489 71.3654C19.7388 73.2665 10.2412 83.0247 5.97923 95.1285C1.1193 108.926 3.42661 121.958 17.8301 124.702C17.8001 126.543 17.5844 128.377 17.1862 130.175C17.179 130.243 17.1965 130.311 17.2355 130.367C17.2745 130.423 17.3324 130.463 17.3985 130.48C17.4647 130.497 17.5346 130.489 17.5956 130.458C17.6566 130.428 17.7044 130.376 17.7304 130.313C18.2436 128.527 18.5219 126.682 18.5583 124.825C22.0283 125.34 25.5732 124.799 28.7315 123.272C31.8897 121.745 34.515 119.302 36.2656 116.262C38.4846 117.105 40.7495 117.822 43.0496 118.409C50.2858 120.455 59.722 122.487 68.66 120.064C68.4837 124.349 68.2384 127.784 67.8551 131.195C67.8551 131.532 68.3227 131.632 68.3764 131.294C68.6754 129.501 69.4189 121.628 69.3729 119.857C75.0607 118.11 78.8628 114.162 79.798 109.034C81.4307 100.341 77.7513 90.5829 70.0015 82.9863ZM37.4461 49.971C37.6454 52.2094 37.4461 53.8038 36.7639 54.8386C36.5109 55.2142 36.1276 55.6052 35.798 55.6052C35.5451 55.3292 33.8893 53.6122 32.3256 54.6163C31.306 55.2832 31.26 56.5787 32.2259 58.2651C32.9162 59.2894 33.4101 60.4331 33.6823 61.6379C30.7465 58.4491 29.8496 55.4595 29.175 51.1745C29.9542 51.034 30.6655 50.6407 31.1987 50.0554C32.5402 52.0484 35.821 51.6498 37.4461 49.971ZM32.6935 55.1223C33.7283 54.486 34.6865 55.2526 35.5604 56.0191C36.074 56.4714 36.9172 55.8351 37.3158 55.2526C38.3583 53.8115 38.2663 51.4198 38.1283 50.224C38.8724 50.9326 39.8605 51.3278 40.8879 51.3278C41.9154 51.3278 42.9035 50.9326 43.6475 50.224C43.8008 52.4317 48.4308 52.9376 49.6496 51.1055C50.2092 54.9383 50.4775 63.2247 48.6224 66.6972C47.0893 67.3717 43.6015 68.9125 41.8691 68.2303C40.382 67.64 39.6308 65.371 37.8984 64.3975C36.7332 63.7536 35.7367 64.4818 36.5492 65.785C38.6036 69.0505 38.4196 70.2923 36.7945 73.6498C35.3703 73.2616 34.0383 72.5917 32.8775 71.6797C34.5639 69.2651 35.0238 64.9571 34.6022 62.0902C34.2266 59.5376 33.8357 59.6909 32.8238 57.8052C32.3562 57.031 31.9423 55.5975 32.6935 55.1223ZM45.6252 70.5836C45.564 70.6119 45.5154 70.6617 45.4884 70.7235C45.4614 70.7852 45.458 70.8547 45.4787 70.9189C45.4995 70.983 45.543 71.0373 45.601 71.0716C45.6591 71.1058 45.7277 71.1177 45.7938 71.1048C46.4512 70.9874 47.0743 70.7256 47.6182 70.3383C47.6624 71.0531 47.4741 71.763 47.0816 72.362C46.9437 72.5536 47.189 73.1285 47.6872 72.4156C47.6489 74.5313 46.5681 77.1452 44.4907 78.1724C43.0828 77.9179 41.7429 77.3744 40.5555 76.5762C39.3681 75.778 38.359 74.7424 37.5918 73.5348C39.8914 69.5947 37.8677 66.6358 37.1931 65.4094C36.8175 64.7041 37.0092 64.5968 37.6224 64.9954C39.0712 65.9153 40.3437 68.4832 41.7464 68.8282C44.391 69.4644 47.6489 67.87 49.2433 67.1571C50.0712 66.7815 50.5541 66.5285 49.5576 67.778C48.2238 69.4261 47.4649 69.771 45.6252 70.5836ZM13.1848 103.3C13.1571 103.362 13.1527 103.432 13.1726 103.498C13.1924 103.563 13.2352 103.619 13.2929 103.655C13.3507 103.692 13.4196 103.706 13.487 103.696C13.5544 103.685 13.6159 103.651 13.6601 103.599C20.3827 93.0052 31.5053 85.6539 37.2315 74.3167C38.1207 76.2944 41.9228 78.8393 44.2684 78.8393C44.2684 80.748 44.0768 83.017 43.8775 85.194C41.5778 84.6651 35.3611 82.7181 34.2419 80.1731C34.1116 79.8588 33.6057 80.0735 33.7283 80.3877C34.7785 83.2316 41.2635 85.516 43.8085 85.9989C43.2709 91.7265 42.206 97.3924 40.6273 102.924C39.4698 107.064 37.9827 112.069 35.8363 115.772C34.1252 118.816 31.507 121.25 28.3467 122.735C25.1863 124.221 21.6413 124.683 18.2057 124.058C4.05519 121.574 1.92418 108.811 6.73045 95.3278C11.2224 82.6951 21.0573 73.8031 32.4022 72.1167C33.6354 73.026 34.9835 73.7683 36.4113 74.3243C30.6621 85.4163 19.7005 92.6985 13.1848 103.3ZM41.2865 103.246C48.7352 100.107 56.6494 98.2141 64.7123 97.6428C67.0119 97.4895 69.3116 97.4971 71.6112 97.4971C71.9485 97.4971 71.9562 96.9452 71.6112 96.9452C70.0474 96.8367 68.479 96.8086 66.9123 96.8609C66.5367 93.7947 61.0099 84.8491 59.1318 82.3731C59.0837 82.3277 59.0209 82.301 58.9548 82.298C58.8887 82.2949 58.8238 82.3158 58.7717 82.3567C58.7197 82.3975 58.6841 82.4557 58.6714 82.5207C58.6587 82.5856 58.6698 82.6529 58.7025 82.7104C62.4663 87.9842 65.5095 94.6992 66.1151 96.8916C59.3771 97.1445 48.9827 98.7389 41.5012 102.403C42.2064 99.8198 44.9353 89.1647 44.9966 78.64C47.1046 77.6972 48.6071 74.286 48.4308 71.994C56.3787 73.8041 63.6683 77.7846 69.4879 83.4923C76.3179 90.1842 80.5032 98.8233 79.2154 108.214C78.5332 113.579 74.7234 117.734 69.0356 119.244C59.2315 121.927 49.1437 119.597 39.4621 116.592C38.5249 116.276 37.5702 116.015 36.6029 115.81C38.562 111.781 40.1304 107.574 41.2865 103.246Z"
                className="fill-dark dark:fill-light"
              />
              <path
                d="M40.911 53.8958C41.1091 53.6031 41.3733 53.361 41.6822 53.1893C41.9911 53.0175 42.3362 52.9208 42.6894 52.907C43.2489 52.907 43.2183 52.0638 42.6894 52.1404C42.2341 52.1883 41.7957 52.3395 41.4078 52.5827C41.0199 52.8258 40.6926 53.1543 40.451 53.5432C40.2517 53.8575 40.6963 54.2024 40.911 53.8958ZM42.72 56.0192C42.4057 56.2721 42.4287 57.5523 42.904 57.5523C43.0127 57.5409 43.1143 57.4931 43.1923 57.4165C43.2703 57.3399 43.32 57.2391 43.3333 57.1307C43.5096 56.4638 43.0573 55.7815 42.72 56.0192ZM42.0455 62.3509C42.0311 62.2909 41.9986 62.2369 41.9524 62.1961C41.9062 62.1554 41.8485 62.1299 41.7873 62.1232C41.726 62.1165 41.6642 62.1288 41.6102 62.1586C41.5563 62.1884 41.5128 62.2341 41.4859 62.2895C41.4092 62.3969 41.2636 62.7265 41.5855 63.3934C41.8041 63.8474 42.1813 64.2056 42.6459 64.4005C43.1105 64.5954 43.6305 64.6135 44.1075 64.4512C44.1721 64.4256 44.225 64.3771 44.2562 64.315C44.2874 64.2529 44.2948 64.1814 44.2768 64.1143C44.2588 64.0471 44.2168 63.9889 44.1588 63.9507C44.1007 63.9125 44.0306 63.8969 43.9618 63.907C42.8733 64.1216 42.2448 63.4317 42.0455 62.3509Z"
                className="fill-dark dark:fill-light"
              />
            </svg>
          </div>
          <div className=" w-full h-full">
            <ol className="flex flex-col gap-y-10">
              {data.qna.map((item) => (
                <li key={item.id}>
                  <h4 className="leading-8 text-2xl  mb-3">{item.Question}</h4>
                  <p className="text-sm text-accent">{item.Answer}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
