export default function (cardType) {
  switch(cardType){
  case '通常モンスター':
    return "【●族／通常】";
  case '効果モンスター':
    return "【●族／効果】";
  case '儀式モンスター':
    return "【●族／儀式／効果】";
  case '融合モンスター':
    return "【●族／融合／効果】";
  case 'シンクロモンスター':
    return "【●族／シンクロ／効果】";
  case 'エクシーズモンスター':
    return "【●族／エクシーズ／効果】";
  case '通常ペンデュラム':
    return "【●族／ペンデュラム】";
  case '効果ペンデュラム':
    return "【●族／ペンデュラム／効果】";
  case 'シンクロペンデュラム':
    return "【●族／シンクロ／ペンデュラム／効果】";
  case 'エクシーズペンデュラム':
    return "【●族／エクシーズ／ペンデュラム／効果】";
  case '融合ペンデュラム':
    return "【●族／融合／ペンデュラム／効果】";
  case '儀式ペンデュラム':
    return "【●族／儀式／ペンデュラム／効果】";
  case 'リンクモンスター':
    return "【●族／リンク／効果】";
  default:
    return "";
  }
}