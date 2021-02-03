import Translation from "./domain/Translation";
import dayjs from "dayjs";

export const translations : Translation[] = [
    {
        id: "1",
        en: "cat",
        fr: "chat",
        note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim excepturi labore molestiae optio ullam! Amet aperiam, asperiores aut beatae consequuntur dolor, doloremque ducimus fugiat laboriosam maxime quibusdam, quidem totam veniam.",
        creation_date: dayjs().subtract(2, "day")
    },
    {
        id: "2",
        en: "dog",
        fr: "chien",
        note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim excepturi labore molestiae optio ullam! Amet aperiam, asperiores aut beatae consequuntur dolor, doloremque ducimus fugiat laboriosam maxime quibusdam, quidem totam veniam.",
        creation_date: dayjs().subtract(3, "day")
    },
    {
        id: "3",
        en: "horse",
        fr: "cheval",
        note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim excepturi labore molestiae optio ullam! Amet aperiam, asperiores aut beatae consequuntur dolor, doloremque ducimus fugiat laboriosam maxime quibusdam, quidem totam veniam.",
        creation_date: dayjs().subtract(1, "day")
    }
];
