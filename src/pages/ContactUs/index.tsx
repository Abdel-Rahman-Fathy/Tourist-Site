import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";

function ContactUsPage() {
  const [t] = useTranslation();

  return (
    <>
      <FixedSection title={t("contactUs")} />
    </>
  );
}

export default ContactUsPage;
