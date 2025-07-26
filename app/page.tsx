import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4  md:py-10 ">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>We&nbsp;</span>
        <span className={title({ color: "orange" })}>Dont&nbsp;</span>
        <br />
        <span className={title()}>
          Reflect The Light <br /> We Create our Own.
        </span>
        <div className={subtitle({ class: "mt-4" })}>Founded in 2023.</div>
      </div>
    </section>
  );
}
