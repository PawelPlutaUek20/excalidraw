import {
  DEFAULT_ELEMENT_PROPS,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_TEXT_ALIGN,
  EXPORT_SCALES,
  THEME,
} from "../shared/constants";
import { AppState, NormalizedZoomValue } from "../excalidraw/types";

const defaultExportScale = EXPORT_SCALES.includes(devicePixelRatio)
  ? devicePixelRatio
  : 1;

export const getDefaultAppState = (): Omit<
  AppState,
  "offsetTop" | "offsetLeft" | "width" | "height"
> => {
  return {
    showWelcomeScreen: false,
    theme: THEME.LIGHT,
    collaborators: new Map(),
    currentChartType: "bar",
    currentItemBackgroundColor: DEFAULT_ELEMENT_PROPS.backgroundColor,
    currentItemEndArrowhead: "arrow",
    currentItemFillStyle: DEFAULT_ELEMENT_PROPS.fillStyle,
    currentItemFontFamily: DEFAULT_FONT_FAMILY,
    currentItemFontSize: DEFAULT_FONT_SIZE,
    currentItemOpacity: DEFAULT_ELEMENT_PROPS.opacity,
    currentItemRoughness: DEFAULT_ELEMENT_PROPS.roughness,
    currentItemStartArrowhead: null,
    currentItemStrokeColor: DEFAULT_ELEMENT_PROPS.strokeColor,
    currentItemRoundness: "round",
    currentItemStrokeStyle: DEFAULT_ELEMENT_PROPS.strokeStyle,
    currentItemStrokeWidth: DEFAULT_ELEMENT_PROPS.strokeWidth,
    currentItemTextAlign: DEFAULT_TEXT_ALIGN,
    cursorButton: "up",
    activeEmbeddable: null,
    draggingElement: null,
    editingElement: null,
    editingGroupId: null,
    editingLinearElement: null,
    activeTool: {
      type: "selection",
      customType: null,
      locked: DEFAULT_ELEMENT_PROPS.locked,
      lastActiveTool: null,
    },
    penMode: false,
    penDetected: false,
    errorMessage: null,
    exportBackground: true,
    exportScale: defaultExportScale,
    exportEmbedScene: false,
    exportWithDarkMode: false,
    fileHandle: null,
    gridSize: null,
    isBindingEnabled: true,
    defaultSidebarDockedPreference: false,
    isLoading: false,
    isResizing: false,
    isRotating: false,
    lastPointerDownWith: "mouse",
    multiElement: null,
    name: `${t("labels.untitled")}-${getDateTime()}`,
    contextMenu: null,
    openMenu: null,
    openPopup: null,
    openSidebar: null,
    openDialog: null,
    pasteDialog: { shown: false, data: null },
    previousSelectedElementIds: {},
    resizingElement: null,
    scrolledOutside: false,
    scrollX: 0,
    scrollY: 0,
    selectedElementIds: {},
    selectedGroupIds: {},
    selectedElementsAreBeingDragged: false,
    selectionElement: null,
    shouldCacheIgnoreZoom: false,
    showStats: false,
    startBoundElement: null,
    suggestedBindings: [],
    frameRendering: { enabled: true, clip: true, name: true, outline: true },
    frameToHighlight: null,
    editingFrame: null,
    elementsToHighlight: null,
    toast: null,
    viewBackgroundColor: COLOR_PALETTE.white,
    zenModeEnabled: false,
    zoom: {
      value: 1 as NormalizedZoomValue,
    },
    viewModeEnabled: false,
    pendingImageElementId: null,
    showHyperlinkPopup: false,
    selectedLinearElement: null,
    snapLines: [],
    originSnapOffset: {
      x: 0,
      y: 0,
    },
    objectsSnapModeEnabled: false,
    userToFollow: null,
    followedBy: new Set(),
  };
};