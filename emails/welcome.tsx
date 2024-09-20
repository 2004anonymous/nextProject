import { Button, Head, Hr, Html, Link, Text } from "@react-email/components";
import * as React from "react";

export default function Welcome(username : string) {
  return (
    <Html>
      <Head>
      Hello {username} Welcome to Anonymous Code
      </Head>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas minus nobis ducimus aspernatur veritatis, obcaecati ex illum, velit officiis sit quo eveniet voluptatem consequatur! Accusantium quaerat officia rerum molestiae possimus.</Text>
      <Button className=" rounded-lg"
        href="https://mystock-53974.web.app/"
        style={{ background: "#000", color: "#fff", padding: "12px 20px", borderRadius:"20xp" }}
      >
        Continue
      </Button>
      <Hr/>
      <Link href="http://parrot53.netlify.app">http://parrot53.netlify.app</Link>
      <Text>
        Thanks for visiting.
      </Text>
    </Html>
  );
}
