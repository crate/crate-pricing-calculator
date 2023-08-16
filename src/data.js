export const REGIONS = ['eu-west-1', 'us-east-1', 'us-west-1', 'ap-southeast-1'];

export const PRODUCTS = [
    {
        name: 'cr0',
        cpu: 2,
        ram: 4,
        maxScale: 1,
    },
    {
        name: 'cr1',
        cpu: 4,
        ram: 8,
        maxScale: 3,
    },
    {
        name: 'cr2',
        cpu: 8,
        ram: 16,
        maxScale: 9,
    },
    {
        name: 'cr3',
        cpu: 16,
        ram: 32,
        maxScale: 9,
    },
    {
        name: 'cr4',
        cpu: 32,
        ram: 64,
        maxScale: 12,
    },
];

export const PRICING = {
    default: {
        cr0: 5.0,
        cr1: 10.0,
        cr2: 20.0,
        cr3: 30.0,
        cr4: 40.0,
    },
    'us-west-1': {
        cr0: 5.99,
        cr1: 10.99,
        cr2: 20.99,
        cr3: 30.99,
        cr4: 40.99,
    },
    'ap-southeast-1': {
        cr0: 99.99,
    },
};
