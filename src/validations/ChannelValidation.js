import { body, check} from "express-validator";
import validationFunction from "./validationFunction";
import resFormat from "../utils/resFormat";

//요청 단위 컨벤션 : [요청네임]ReqeustValid

export const ChannelRequestValid = async (req, res, next) => {
    await check("userId")
        .notEmpty()
        .withMessage("userId가 존재하지 않습니다.")
        .bail()
        .isNumeric()
        .withMessage("userId에는 숫자가 들어와야 합니다.")
        .run(req);
    await check("name")
        .exists()
        .withMessage("name 존재하지 않습니다")
        .bail()
        .isLength({ max: 20 })
        .withMessage("20자 이내 작성 가능")
        .run(req);
    await check("introduce")
        .exists()
        .withMessage("introduce가 존재하지 않습니다")
        .bail()
        .isLength({ max: 500 })
        .withMessage("500자 이내 작성 가능")
        .run(req);
    await check("category")
        .exists()
        .withMessage("category가 존재하지 않습니다")
        .bail()
        .run(req);        
    await check("tag")
        .exists()
        .withMessage("tag가 존재하지 않습니다.")
        .if((value, { req }) => value !== null)
        .isArray()
        .withMessage("배열만 가능합니다.")
        .run(req);
    await check("src")
        .exists()
        .withMessage("src가 존재하지 않습니다.")
        .run(req);

    if (!(req.body.tag === null)) {
        await check("tag.*")
            .trim()
            .notEmpty()
            .withMessage("값이 없습니다.")
            .isLength({ max: 10 })
            .withMessage("tag는 10자 이내로 작성해야 합니다.")
            .run(req);
    }
    validationFunction(req, res, next);
};

export const GetListRequestValid = async (req, res, next) => {
    await check("userId")
        .exists()
        .withMessage("userId가 존재하지 않습니다.")
        .bail()
        .isNumeric()
        .withMessage("숫자 형식이어야 합니다.")
        .run(req);
    validationFunction(req, res, next);
};

export const GetInfoRequestValid = async (req, res, next) => {
    await check("Channeld")
        .exists()
        .withMessage("ChannelId가 존재하지 않습니다.")
        .bail()
        .isNumeric()
        .withMessage("숫자 형식이어야 합니다.")
        .run(req);
    validationFunction(req, res, next);
};