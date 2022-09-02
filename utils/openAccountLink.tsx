import { E_DeveloperAccounts } from "../config";
import { Linking } from "react-native";

export default function openAccountLink(account: E_DeveloperAccounts) {
    Linking.openURL(account)
}