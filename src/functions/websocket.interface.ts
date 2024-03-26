export function getWebSocketURL(): string {
  const persistSocketURL: string = localStorage.getItem("WebSocketURL") || "";

  setWebSocketURL(persistSocketURL || "ws://localhost:9090");

  return persistSocketURL || "ws://localhost:9090";
}

export function setWebSocketURL(socketURL: string): void {
  localStorage.setItem("WebSocketURL", socketURL);
}
