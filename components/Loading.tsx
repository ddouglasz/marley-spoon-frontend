import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image src="/loading.gif" alt="Vercel Logo" width={500} height={500} />
    </div>
  );
};

export default Loading;
