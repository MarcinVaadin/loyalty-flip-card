export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

/**
 * Minimal subset of the Home Assistant frontend object. The card only needs it
 * when Home Assistant injects it; all rendering happens locally.
 */
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  [key: string]: unknown;
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: unknown;
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: LovelaceCardConfig): void;
  getCardSize?(): number;
}

export interface CustomCardEntry {
  type: string;
  name: string;
  description?: string;
  preview?: boolean;
  documentationURL?: string;
}

export interface HaFormSchema {
  name: string;
  selector: Record<string, unknown>;
  required?: boolean;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}
