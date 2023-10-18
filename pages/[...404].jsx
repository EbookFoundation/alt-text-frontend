export const getServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
};

export default function NotFound() {
  return <></>;
}
