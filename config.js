/*
██╗    ██╗██╗ ██████╗██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
██║    ██║██║██╔════╝██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
██║ █╗ ██║██║██║     █████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
██║███╗██║██║██║     ██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
╚███╔███╔╝██║╚██████╗██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 

Copyright (c) 2024 Wick Studio
*/

module.exports = {
    token: '', // التوكن
    serverId: '', // ايدي السيرفر
    textChannelId: '', // ايدي الروم
    language: 'en', // ar | en
    updateInterval: 20000, // وقت تحديث الامبد
    commandPrefix: '!status', // الامر مع البرفكس
    showAllMembers: true, // جميع الاعضاء
    showBotCount: true, // جميع البوتات
    showTextChannels: true, // رومات الكتابية
    showVoiceChannels: true, // رومات الصوتية
    showRoles: true, // الرتب
    showBoostCount: true, // البوستات
    showServerId: true, // اخفاء / اظهار ايدي السيرفر
    showServerCreationDate: true, // تاريخ انشاء السيرفر
    showServerOwner: true, // اخفاء / اظهار سيرفر اونر
    Color: '#07132b', // لون الامبد
    ownerId: '', // ايدي سيرفر اونر
    roleIdToTrack: '', // ايدي رتبة الزبون
    Banner: '', // صورة البنر
};