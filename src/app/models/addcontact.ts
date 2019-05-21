export interface AddContact {
    givenName: string;
    surname: string;
    emailAddresses: { address: string, name: string };
}
