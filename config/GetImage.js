export default class GetImage {
    getAttributeImage(value){
        switch(value){
        case "闇":
            return require("../images/cards/4_attribute/0.png");
        case "光":
            return require("../images/cards/4_attribute/1.png"); 
        case "地":
            return require("../images/cards/4_attribute/2.png");
        case "水":
            return require("../images/cards/4_attribute/3.png");
        case "炎":
            return require("../images/cards/4_attribute/4.png");
        case "風":
            return require("../images/cards/4_attribute/5.png");
        case "神":
            return require("../images/cards/4_attribute/6.png");
        }
    }

    getCardTypeImage(value){
        switch(value){
            case '通常モンスター' :
                return require("../images/cards/1_monster/normal.png")
            case '効果モンスター':
                return require("../images/cards/1_monster/Effect.png")
            case '儀式モンスター':
                return require("../images/cards/1_monster/Ritual.png")
            case '融合モンスター':
                return require("../images/cards/1_monster/Fusion.png")
            case 'シンクロモンスター':
                return require("../images/cards/1_monster/s.png")
            case 'エクシーズモンスター':
                return require("../images/cards/1_monster/x.png")
            case '通常ペンデュラム':
                return require("../images/cards/1_monster/pNormal.png")
            case '効果ペンデュラム':
                return require("../images/cards/1_monster/pEffect.png")
            case 'シンクロペンデュラム':
                return require("../images/cards/1_monster/ps.png")
            case 'エクシーズペンデュラム':
                return require("../images/cards/1_monster/px.png")
            case '融合ペンデュラム':
                return require("../images/cards/1_monster/pFusion.png")
            case '儀式ペンデュラム':
                return require("../images/cards/1_monster/pRitual.png")
            case 'リンクモンスター':
                return require("../images/cards/1_monster/linkFlame.png")
            case '通常魔法':
                return require("../images/cards/2_magic/normal.png")
            case '速攻魔法':
                return require("../images/cards/2_magic/haste.png")
            case '永続魔法':
                return require("../images/cards/2_magic/perpetual.png")
            case '装備魔法':
                return require("../images/cards/2_magic/equipment.png")
            case '儀式魔法':
                return require("../images/cards/2_magic/ritual.png")
            case 'フィールド魔法':
                return require("../images/cards/2_magic/field.png")
            case '通常罠':
                return require("../images/cards/3_trap/normal.png")
            case '永続罠':
                return require("../images/cards/3_trap/perpetual.png")
            case 'カウンター罠': 
                return require("../images/cards/3_trap/counter.png")
            case 'トークン': 
                return require("../images/cards/1_monster/token.png")
            case 'トークン（記述可）':
                return require("../images/cards/1_monster/token.png")
        }
    }

    getLevelImage(value){
        switch(value){
        case "0":
            return require("../images/cards/5_level_rank/level_0.png")
        case "1":
            return require("../images/cards/5_level_rank/level_1.png")
        case "2":
            return require("../images/cards/5_level_rank/level_2.png")
        case "3":
            return require("../images/cards/5_level_rank/level_3.png")
        case "4":
            return require("../images/cards/5_level_rank/level_4.png")
        case "5":
            return require("../images/cards/5_level_rank/level_5.png")
        case "6":
            return require("../images/cards/5_level_rank/level_6.png")
        case "7":
            return require("../images/cards/5_level_rank/level_7.png")
        case "8":
            return require("../images/cards/5_level_rank/level_8.png")
        case "9":
            return require("../images/cards/5_level_rank/level_9.png")
        case "10":
            return require("../images/cards/5_level_rank/level_10.png")
        case "11":
            return require("../images/cards/5_level_rank/level_11.png")
        case "12":
            return require("../images/cards/5_level_rank/level_12.png")
        }
    }

    getRankImage(value){
        switch(value){
        case "0":
            return require("../images/cards/5_level_rank/rank_0.png")
        case "1":
            return require("../images/cards/5_level_rank/rank_1.png")
        case "2":
            return require("../images/cards/5_level_rank/rank_2.png")
        case "3":
            return require("../images/cards/5_level_rank/rank_3.png")
        case "4":
            return require("../images/cards/5_level_rank/rank_4.png")
        case "5":
            return require("../images/cards/5_level_rank/rank_5.png")
        case "6":
            return require("../images/cards/5_level_rank/rank_6.png")
        case "7":
            return require("../images/cards/5_level_rank/rank_7.png")
        case "8":
            return require("../images/cards/5_level_rank/rank_8.png")
        case "9":
            return require("../images/cards/5_level_rank/rank_9.png")
        case "10":
            return require("../images/cards/5_level_rank/rank_10.png")
        case "11":
            return require("../images/cards/5_level_rank/rank_11.png")
        case "12":
            return require("../images/cards/5_level_rank/rank_12.png")
        }
    }
}