enum Variant {
    BLUE = 1,
}

enum Size {
    SMALL = 1,
}

const SIZE_MAPS: Record<Size, string> = {
    [Size.SMALL]: "mr-1 px-3 py-1.5 text-sm my-2",
};

const VARIANT_MAPS: Record<Variant, string> = {
    [Variant.BLUE]: "bg-sky-600 hover:bg-sky-500 text-white",
};


export { Variant, Size, SIZE_MAPS, VARIANT_MAPS };