import { Core } from "../../index";
import { GuildData, InteractionCommandHandler, Interaction, InteractionReplyFunction } from "../../types";


export default class NewHelpCommand extends InteractionCommandHandler {

  public handle(command: Interaction, data: GuildData, reply: InteractionReplyFunction): boolean {
    const cmdlist = Core.commandHandler.commands
      .filter(c => !c.info.hideOnHelp)
      .map(c => `• \`/${c.info.name}\` ─ ${Core.text(data, c.info.desc)}`);

    reply('ChannelMessageWithSource', {
      title: '=cmd_help_1',
      description: Core.text(data, '=cmd_help_2') + '\n\n' + cmdlist.join('\n\n')
    })
    return true
  }

}
