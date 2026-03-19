export class ModelService {
  static base =
    "https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/";

  /** 200+ 模型名称列表 */
  static models: Record<string, string> = {
    'bilibili-22': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/bilibili-22/index.json',
    'bilibili-33': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/bilibili-33/index.json',
    'chiaki_kitty': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/chiaki_kitty/chiaki_kitty.model.json',
    'chitose': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/chitose/chitose.model.json',
    'date_16': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/date_16/date_16.model.json',
    'hallo_16': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hallo_16/hallo_16.model.json',
    'haru01': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/haru01/haru01.model.json',
    'haru02': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/haru02/haru02.model.json',
    'haruto': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/haruto/haruto.model.json',
    'hibiki': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json',
    'hijiki': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hijiki/hijiki.model.json',
    'index': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/index/index.model.json',
    'izumi': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/izumi/izumi.model.json',
    'jin': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/jin/jin.model.json',
    'kanzaki': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kanzaki/kanzaki.model.json',
    'kesshouban': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kesshouban/model.json',
    'koharu': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/koharu/koharu.model.json',
    'kuroko': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kuroko/kuroko.model.json',
    'len': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/len/len.model.json',
    'len_impact': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/len_impact/len_impact.model.json',
    'len_space': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/len_space/len_space.model.json',
    'len_swim': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/len_swim/len_swim.model.json',
    'mikoto': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/mikoto/mikoto.model.json',
    'miku': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/miku/miku.model.json',
    'murakumo': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/murakumo/index.json',
    'ni-j': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/ni-j/ni-j.model.json',
    'nico': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/nico/nico.model.json',
    'nietzsche': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/nietzsche/nietzsche.model.json',
    'nipsilon': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/nipsilon/nipsilon.model.json',
    'nito': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/nito/nito.model.json',
    'potion-Maker-Pio': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/potion-Maker-Pio/index.json',
    'potion-Maker-Tia': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/potion-Maker-Tia/index.json',
    'ryoufuku': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/ryoufuku/ryoufuku.model.json',
    'saten': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/saten/saten.model.json',
    'seifuku': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/seifuku/seifuku.model.json',
    'shifuku': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/shifuku/shifuku.model.json',
    'shifuku2': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/shifuku2/shifuku2.model.json',
    'shizuku-48': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/shizuku-48/index.json',
    'shizuku-pajama': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/shizuku-pajama/index.json',
    'stl': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/stl/stl.model.json',
    'tororo': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/tororo/tororo.model.json',
    'touma': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/touma/touma.model.json',
    'tsumiki': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/tsumiki/tsumiki.model.json',
    'uiharu': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/uiharu/uiharu.model.json',
    'unitychan': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/unitychan/unitychan.model.json',
    'wanko': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/wanko/wanko.model.json',
    'wed_16': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/wed_16/wed_16.model.json',
    'z16': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/z16/z16.model.json',
    // Girls Frontline
    'HK416-1-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-1/normal/model.json',
    'HK416-1-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-1/destroy/model.json',
    'HK416-2-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-2/normal/model.json',
    'HK416-2-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-2/destroy/model.json',
    'UMP45-1-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-1/normal/model.json',
    'UMP45-1-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-1/destroy/model.json',
    'UMP45-2-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-2/normal/model.json',
    'UMP45-2-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-2/destroy/model.json',
    'UMP45-3-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-3/normal/model.json',
    'UMP45-3-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-3/destroy/model.json',
    'M4A1-1-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-1/normal/model.json',
    'M4A1-1-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-1/destroy/model.json',
    'M4A1-2-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-2/normal/model.json',
    'M4A1-2-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-2/destroy/model.json',
    'M4-SOPMOD-II-1-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-1/normal/model.json',
    'M4-SOPMOD-II-1-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-1/destroy/model.json',
    'M4-SOPMOD-II-2-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-2/normal/model.json',
    'M4-SOPMOD-II-2-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-2/destroy/model.json',
    'WA2000-1-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-1/normal/model.json',
    'WA2000-1-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-1/destroy/model.json',
    'WA2000-2-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-2/normal/model.json',
    'WA2000-2-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-2/destroy/model.json',
    'WA2000-3-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-3/normal/model.json',
    'WA2000-3-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-3/destroy/model.json',
    'Kar98k-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/Kar98k/normal/model.json',
    'G11-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/G11/normal/model.json',
    'G11-destroy': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/G11/destroy/model.json',
    'UMP9-normal': 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP9/normal/model.json',
  }

  static getModelNames(): string[] {
    return Object.keys(this.models) || [];
  }

  static getAllModels(): Record<string, string> {
    return this.models;
  }

  static getUrl(name: string): string {
    return this.models[name] || this.getRandom();
  }

  static getRandom(): string {
    const keys = Object.keys(this.models);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return this.models[randomKey];
  }

  static getByName(name: string): string {
    const foundKey = Object.keys(this.models).find(
      (key) => key.toLowerCase() === name.toLowerCase()
    );
    return foundKey ? this.models[foundKey] : this.getRandom();
  }
}
