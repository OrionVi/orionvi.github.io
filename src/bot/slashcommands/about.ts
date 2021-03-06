import Const from "../const";
import { Core } from "../../index";
import { GuildData, InteractionCommandHandler, Interaction, InteractionReplyFunction } from "../../types";


export default class NewAboutCommand extends InteractionCommandHandler {

  public handle(command: Interaction, data: GuildData, reply: InteractionReplyFunction): boolean {
    const translationCredits = data.language.startsWith('en')
      ? ''
      : `\n\n${Core.text(data, '=translation_by')}\n${Core.languageManager.getRaw(data.language, 'translators').split(', ').map(n => `• ${n}`).join('\n')}`;

    reply('ChannelMessageWithSource', {
      title: '=cmd_info_1',
      description: Core.text(data, '=cmd_info_2', {
        amazingPeople: Const.links.team,
        website: Const.links.website,
        inviteLink: Const.links.botInvite,
        discordInvite: Const.links.supportInvite
      }) + translationCredits,
      footer: {
        text: 'Copyright © 2020-2021 FreeStuff'
      }
    })
    return true
  }

}
