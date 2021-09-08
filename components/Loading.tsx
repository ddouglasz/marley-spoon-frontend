import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image src="/loading.gif" alt="Vercel Logo" width={600} height={600} />
    </div>
  );
};

export default Loading;
