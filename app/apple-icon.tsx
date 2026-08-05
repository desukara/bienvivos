import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4b0d1d",
        }}
      >
        <svg width="146" height="118" viewBox="0 0 390 300" fill="none">
          <path d="M32 198H132C145 156 164 135 195 135C226 135 245 156 258 198H358" stroke="#d95f35" strokeWidth="24" strokeLinecap="round" />
          <path d="M195 34V118M122 56L162 126M268 56L228 126M70 105L143 145M320 105L247 145M41 164L128 177M349 164L262 177" stroke="#f2ad00" strokeWidth="20" strokeLinecap="round" />
          <path d="M195 196L207 218L229 230L207 242L195 264L183 242L161 230L183 218L195 196Z" fill="#f07a3d" />
        </svg>
      </div>
    ),
    size,
  );
}
