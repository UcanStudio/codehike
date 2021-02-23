import React from "react"
import {
  CodeFiles,
  CodeProps,
  Preset,
  PreviewProps,
} from "./hike-context"

export { useMdxSteps, StepHead }

export interface StepHeadProps {
  children: any
  focus?: string
  activeFile?: string
  codeProps?: Partial<CodeProps>
  previewProps?: Partial<PreviewProps>
}

function StepHead(props: StepHeadProps) {
  return null
}

interface Step {
  content: React.ReactNode[]
  previewProps: PreviewProps
  codeProps: CodeProps
}

const defaultFilename = "App.js"

function useMdxSteps(
  mdx: React.ReactNode,
  previewProps: PreviewProps,
  codeProps: CodeProps,
  preset?: Partial<Preset>
) {
  const steps: Step[] = []
  React.Children.forEach(mdx, (child: any) => {
    if (child?.props?.mdxType === "StepHead") {
      const stepHeadProps = child?.props || {}
      const { files, activeFile } = getFiles(stepHeadProps)

      const step = {
        content: [],
        previewProps: getPreviewProps(
          stepHeadProps,
          previewProps,
          preset
        ),
        codeProps: getCodeProps(
          stepHeadProps,
          codeProps,
          files,
          activeFile
        ),
      }
      steps.push(step)
    } else {
      steps[steps.length - 1].content.push(child)
    }
  })
  return steps
}

function getFiles(stepHeadProps: StepHeadProps) {
  let activeFile = stepHeadProps.activeFile || ""
  const files = {} as CodeFiles
  React.Children.forEach(
    stepHeadProps.children,
    preElement => {
      const codeElementProps =
        preElement?.props?.children?.props || {}
      const lang = codeElementProps.className?.slice(9)
      const filename =
        codeElementProps.metastring || defaultFilename
      const code = codeElementProps.children
      files[filename] = { code, lang }
      if (activeFile === "") {
        activeFile = filename
      }
    }
  )
  return { files, activeFile }
}

function getPreviewProps(
  stepHeadProps: StepHeadProps,
  hikePreviewProps: PreviewProps,
  hikePreset: Partial<Preset> | undefined
): PreviewProps {
  return {
    ...hikePreviewProps,
    preset: hikePreset,
    ...stepHeadProps.previewProps,
  }
}

function getCodeProps(
  stepHeadProps: StepHeadProps,
  hikeCodeProps: CodeProps,
  files: CodeFiles,
  activeFile: string
): CodeProps {
  return {
    ...hikeCodeProps,
    ...stepHeadProps.codeProps,
    focus: stepHeadProps.focus || "",
    activeFile,
    files,
  }
}