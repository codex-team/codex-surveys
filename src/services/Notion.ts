import { Client, LogLevel } from "@notionhq/client";
import * as constants from "./constans";

export async function addItem(text: string): Promise<void> {
    const notion = new Client({
        auth: constants.CLIENT_SECRET,
        logLevel: LogLevel.DEBUG,
    })

    try {
        const response = await notion.pages.create({
            parent: { database_id: constants.DATABASE_ID },
            properties: {
                title: {
                    title:[
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            },
        })
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}