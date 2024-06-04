// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: djQLBAWjYFxMHog99o3R36
// Component: nyeuEVwaAa_s
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: djQLBAWjYFxMHog99o3R36/projectcss
import sty from "./PlasmicNavigationBar.module.css"; // plasmic-import: nyeuEVwaAa_s/css

createPlasmicElementProxy;

export const PlasmicNavigationBar__VariantProps = new Array();

export const PlasmicNavigationBar__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavigationBar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__aoB1
          )}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          {"Anna.Design"}
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__q6ZJ)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__tvImx
            )}
            component={Link}
            href={"/#services"}
            platform={"nextjs"}
            role={"menuitem"}
          >
            {"Services"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__c5SbM
            )}
            component={Link}
            href={"/#work"}
            platform={"nextjs"}
            role={"menuitem"}
          >
            {"Work"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__v7Z24
            )}
            component={Link}
            href={"/#about"}
            platform={"nextjs"}
            role={"menuitem"}
          >
            {"About"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___7Asr7
            )}
            component={Link}
            href={"/#contact"}
            platform={"nextjs"}
            role={"menuitem"}
          >
            {"Contact"}
          </PlasmicLink__>
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__rY1Ib)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavigationBar__ArgProps,
          internalVariantPropNames: PlasmicNavigationBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigationBar";
  } else {
    func.displayName = `PlasmicNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationBar = Object.assign(
  // Top-level PlasmicNavigationBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavigationBar
    internalVariantProps: PlasmicNavigationBar__VariantProps,
    internalArgProps: PlasmicNavigationBar__ArgProps
  }
);

export default PlasmicNavigationBar;
/* prettier-ignore-end */
