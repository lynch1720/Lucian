local Rayfield = loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Rayfield/main/source'))()

local Window = Rayfield:CreateWindow({
	Name = "Script Hub",
	LoadingTitle = "Lynch on YouTube",
	LoadingSubtitle = "by Lynch",
	ConfigurationSaving = {
		Enabled = true,
		FolderName = nil,
		FileName = "Lynch Hub"
	},
        Discord = {
        	Enabled = false,
        	Invite = "sirius", 
        	RememberJoins = true 
        },
	KeySystem = false,
	KeySettings = {
		Title = "Key System",
		Subtitle = "Key System",
		Note = "Join the discord (https://discord.gg/NDyGCUe3)",
		FileName = "Lynch Key",
		SaveKey = True,
		GrabKeyFromSite = false, 
		Key = "Christmas Tree"
	}
})
Rayfield:Notify({
    Title = "Enjoy",
    Content = "Thank you for using my Hub",
    Duration = 6.5,
    Image = 4483362458,
    Actions = { -- Notification Buttons
        Ignore = {
            Name = "Okay!",
            Callback = function()
                print("https://discord.gg/NDyGCUe3")
            end
		},
	},
})

local Tab = Window:CreateTab("Destroy UI", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Keybind")

local Keybind = Tab:CreateKeybind({
	Name = "Press Q to destroy the UI",
	CurrentKeybind = "Q",
	HoldToInteract = false,
	Flag = "Keybind1", 
	Callback = function(Keybind)
		Rayfield:Destroy()
	end,
})

local Tab = Window:CreateTab("Blox Fruit", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/SHAREHACK/bloxfruit/main/free'))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Uranium",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Augustzyzx/UraniumX/main/URANIUMMOBILE_V2.3.lua.txt", true))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Atomic Hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/ArceusXHub/atomic-hub/main/atomic-hub"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Bonk Hub V2",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Toonza555/BONKHUBV2/main/Loader"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Cframe v2",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/CFrame3310/CFrameHub/main/BloxFruitV2.lua"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Shadow Hub",
	Callback = function()
loadstring(game:HttpGet("https://hastebin.com/raw/zemomevoya",Shadow_Cutiez))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Thunder z AimBot",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/ThunderZ-HUB/HUB/main/Aimbot"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Bonk v2",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Toonza555/BONKHUBV2/main/Loader"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Ripper Hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/hajibeza/RIPPER-HUB/main/BLOXFRUITNEW.lua"))()
	end,
	
	local Button = Tab:CreateButton({
	Name = "Zamex Hub",
	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/Sixnumz/ZamexMobile/main/Zamex_Mobile.lua'))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Chiba Hub",
	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/KindIhave/ChibaHubcomeback/main/Chibacomebackbeta.txt'))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Mircle Hub ",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/BlackSkyHub/MIRACLEHUB/main/BLOXFRUIT.lua"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "super fast attack",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/trumpxl/choigamemahack/main/superfastattacknhunggahon"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Troll inf exp",
	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/SHAREHACK/allscript/main/level'))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "chest tp ",
	Callback = function()
repeat wait() until game:IsLoaded() wait()
wait(4.7)

loadstring(game:HttpGet("https://raw.githubusercontent.com/GUXX0001/Hub/main/Tpchest.lua"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Winnable hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/xlostpexz/tyuiop/Fps/Loading.lua"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Neva Hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/VEZ2/NEVAHUB/main/2"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "Nub hub",
	Callback = function()
loadstring(game:HttpGet('https://rawscripts.net/raw/UPDATE-16-Blox-Fruits-Nub-V1-Hub-4583'))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "JJTxHub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/JJTChannel/JJTxHUB/main/main.lua", true))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "hxllow hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/1f0yt/community/master/hxllow"))()
	end,
})

local Tab = Window:CreateTab("Pet Simulator X", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Hoho Hub",
	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/acsu123/HOHO_H/main/Loading_UI'))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Project Wd Hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Muhammad6196/Project-WD/main/Main.lua"))()
	end,
})
	
local Button = Tab:CreateButton({
	Name = "???",
	Callback = function()
loadstring(game:HttpGet("https://milkup.info/script/PetSimulatorX/"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "jmes hub",
	Callback = function()
loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/jmesfo0/RobloxScripts/main/psx-jmes.lua"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "unVerf hub",
	Callback = function()
loadstring(game:HttpGet("https://HugeGames.io/script"))()
	end,
})	

local Button = Tab:CreateButton({
	Name = "Flury",
	Callback = function()
loadstring(game:HttpGet("https://milkup.info/script/PetSimulatorX/"))()
	end,
})	

local Tab = Window:CreateTab("Lumber Tycoon 2", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Noob Army",
	Callback = function()
		loadstring(game:HttpGet('https://getexploits.com/key-system/',true))('https://da.com/936657404291084298/1006220505583460352/Script.txt')
	end,
})

local Button = Tab:CreateButton({
	Name = "Butter Hub",
	Callback = function()
		loadstring(game:HttpGet('https://raw.githubusercontent.com/Butterisgood/butter-hub/main/Butterhub.txt'))()
	end,
})

local Tab = Window:CreateTab("Arsenal", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "PWNER HUB",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Maikderninja/Maikderninja/main/PWNERHUB.lua"))();
	end,
})

local Button = Tab:CreateButton({
	Name = "Owl Hub",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/CriShoux/OwlHub/master/OwlHub.txt"))();
	end,
})

local Tab = Window:CreateTab("Shindo Life", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Project WD",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Muhammad6196/Project-WD/main/Main.lua"))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Life Hub",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/SxnwDev/Premier/main/Free-Premier.lua", true))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Infinite Spin",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Xiovr/Roblox/main/SL.lua"))()
	end,
})

local Tab = Window:CreateTab("King Legacy", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Mukuro hub",
	Callback = function()
loadstring(game:HttpGet"https://raw.githubusercontent.com/xQuartyx/DonateMe/main/ScriptLoader")()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "hoho hub",
	Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/acsu123/HOHO_H/main/Loading_UI'))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "one x hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/xOne2/King-Legacy/main/README.md"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Hyper hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/DookDekDEE/Hyper/main/script.lua"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Strike hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/StormSKz12/StirkeHub1/main/Gameincluded"))()
	end,
})

local Button = Tab:CreateButton({
	Name = "winnable hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/xlostpexz/tyuiop/Fps/Loading.lua"))()
	end,
})	

local Tab = Window:CreateTab("Blox Burg", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Scar Hub",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/PainfulDestroyer/Roblox/main/Scar%20Hub"))()
	end,
})

local Tab = Window:CreateTab("MM2", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Eclipse MM2",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Ethanoj1/EclipseMM2/master/Script", true))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Mokuro Hub",
	Callback = function()
-- You can edit min and max, if you want more of each set max higher
local WeaponOwnRange = {
min=5000,
max=10000
}

local DataBase, PlayerData = getrenv()._G.Database, getrenv()._G.PlayerData

local newOwned = {}

for i,v in next, DataBase.Item do
newOwned[i] = math.random(WeaponOwnRange.min, WeaponOwnRange.max) -- newOwned[Weapon]: ItemCount
end

local PlayerWeapons = PlayerData.Weapons

game:GetService("RunService"):BindToRenderStep("InventoryUpdate", 0, function()
PlayerWeapons.Owned = newOwned
end)

game.Players.LocalPlayer.Character.Humanoid.Health = 0
	end,
})

local Tab = Window:CreateTab("Combat Warrior", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Project Hook",
	Callback = function()
		loadstring(game:HttpGet("https://projecthook.xyz/scripts/free.lua"))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Nova.xyz",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/SussyImposterRed/Scripts/main/NEW_NOVA"))()
	end,
})

local Tab = Window:CreateTab("KAT", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Aimbot",
	Callback = function()
		-- Subscribe to ZhenX Script
-- Credits to the Owner

local Camera = game:GetService("Workspace").CurrentCamera
local Players = game:GetService("Players")
local LocalPlayer = game:GetService("Players").LocalPlayer

local function GetClosestPlayer()
   local ClosestPlayer = nil
   local FarthestDistance = math.huge

   for i, v in pairs(Players.GetPlayers(Players)) do
       if v ~= LocalPlayer and v.Character and v.Character.FindFirstChild(v.Character, "HumanoidRootPart") then
           local DistanceFromPlayer = (LocalPlayer.Character.HumanoidRootPart.Position - v.Character.HumanoidRootPart.Position).Magnitude

           if DistanceFromPlayer < FarthestDistance then
               FarthestDistance = DistanceFromPlayer
               ClosestPlayer = v
           end
       end
   end

   if ClosestPlayer then
       return ClosestPlayer
   end
end

local GameMetaTable = getrawmetatable(game)
local OldGameMetaTableNamecall = GameMetaTable.__namecall
setreadonly(GameMetaTable, false)

GameMetaTable.__namecall = newcclosure(function(object, ...)
   local NamecallMethod = getnamecallmethod()
   local Arguments = {...}

   if tostring(NamecallMethod) == "FindPartOnRayWithIgnoreList" then
       local ClosestPlayer = GetClosestPlayer()
       
       if ClosestPlayer and ClosestPlayer.Character then
           Arguments[1] = Ray.new(Camera.CFrame.Position, (ClosestPlayer.Character.Head.Position - Camera.CFrame.Position).Unit * (Camera.CFrame.Position - ClosestPlayer.Character.Head.Position).Magnitude)
       end
   end

   return OldGameMetaTableNamecall(object, unpack(Arguments))
end)

setreadonly(GameMetaTable, true)
	end,
})

local Button = Tab:CreateButton({
	Name = "Owl Hub",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/CriShoux/OwlHub/master/OwlHub.txt"))();
	end,
})

local Tab = Window:CreateTab("A one piece Game", 4483362458) -- Title, Image
local Section = Tab:CreateSection("A one piece game")	
	
local Button = Tab:CreateButton({
	Name = "Lazy Hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/LioK251/RbScripts/main/lazyhub.lua"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "6foot Only pc",
	Callback = function()
loadstring(game:HttpGet('https://www.6footscripts.com/Scripts/6FootHub/Hub.lua'))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Uzu Hub",
	Callback = function()
loadstring(game:HttpGet("https://rawscripts.net/raw/loader_1038"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Marker Hub",
	Callback = function()
loadstring(game:HttpGet("https://rawscripts.net/raw/Testing-A-0ne-Piece-Game-LeadMarkerAOPG-1595"))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Mukuro hub",
	Callback = function()
loadstring(game:HttpGet"https://raw.githubusercontent.com/xQuartyx/DonateMe/main/ScriptLoader")()
	end,
})	
		
local Tab = Window:CreateTab("Arsenal", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Arsenal")	
	
local Button = Tab:CreateButton({
	Name = "Pwner hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Maikderninja/Maikderninja/main/PWNERHUB.lua"))();
	end,
})
	
local Button = Tab:CreateButton({
	Name = "owl hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/CriShoux/OwlHub/master/OwlHub.txt"))();
	end,
})
	
local Button = Tab:CreateButton({
	Name = "dark hub",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/RandomAdamYT/DarkHub/master/Init", true))()
	end,
})	
	
local Button = Tab:CreateButton({
	Name = "Auto farm",
	Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/iqvf/script/main/arsenalautoexecfarmrealnovirus100%25windows11download_yourfileisreadytodownloadexe.lua"))()
	end,
})	

local Tab = Window:CreateTab("Tools", 4483362458) -- Title, Image
local Section = Tab:CreateSection("Scripts")

local Button = Tab:CreateButton({
	Name = "Keyboard",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/advxzivhsjjdhxhsidifvsh/mobkeyboard/main/main.txt", true))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Fly",
	Callback = function()
		loadstring("\108\111\97\100\115\116\114\105\110\103\40\103\97\109\101\58\72\116\116\112\71\101\116\40\40\39\104\116\116\112\115\58\47\47\103\105\115\116\46\103\105\116\104\117\98\117\115\101\114\99\111\110\116\101\110\116\46\99\111\109\47\109\101\111\122\111\110\101\89\84\47\98\102\48\51\55\100\102\102\57\102\48\97\55\48\48\49\55\51\48\52\100\100\100\54\55\102\100\99\100\51\55\48\47\114\97\119\47\101\49\52\101\55\52\102\52\50\53\98\48\54\48\100\102\53\50\51\51\52\51\99\102\51\48\98\55\56\55\48\55\52\101\98\51\99\53\100\50\47\97\114\99\101\117\115\37\50\53\50\48\120\37\50\53\50\48\102\108\121\37\50\53\50\48\50\37\50\53\50\48\111\98\102\108\117\99\97\116\111\114\39\41\44\116\114\117\101\41\41\40\41\10\10")()
	end,
})

local Button = Tab:CreateButton({
	Name = "Fling",
	Callback = function()
		loadstring(game:HttpGet(('https://pastefy.ga/xBdd9GId/raw'),true))()
	end,
})

local Button = Tab:CreateButton({
	Name = "FE Admin & Ban Panel",
	Callback = function()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Kitzoon/Rogue-Hub/main/Main.lua", true))()
	end,
})

local Button = Tab:CreateButton({
	Name = "Infinite Yield",
	Callback = function()
		loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()
	end,
})







Rayfield:LoadConfiguration()