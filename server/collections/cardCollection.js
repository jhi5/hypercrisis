exports.defaultCards = [
	{
		name: "Barrage",
		character: "Gravity Girl",
		type: "Action",
		utilityValues: [""],
		text: "Throw. Deal 2 damage to target opponent. If you've used Throw twice this turn, deal 4 to them instead.",
		flavor: [""],
		illustrations: [""],
		rating: ["3", "4", "5"],
		tags: ["gravity girl", "offense", "throw"],
		comments: ["ok, not great"]
	},
	{
		name: "Chain Reactions",
		character: "Gravity Girl",
		type: "Utility",
		utilityValues: ["2", "3", "0"],
		text: "When this is destroyed, each player discards two cards.",
		flavor: ["Watch your step."],
		illustrations: [""],
		rating: ["4", "4", "4"],
		tags: ["gravity girl", "discard"],
		comments: ["combo build", "not great but aggressive"]
	},
	{
		name: "Controlled Ricochet",
		character: "Gravity Girl",
		type: "Action",
		utilityValues: [""],		
		text: "Whenever a Utility is destroyed this turn, you may draw a card.",
		flavor: ["Practiced application of theoretical math has improved my aim exponentially."],
		illustrations: [""],
		rating: ["2", "4"],
		tags: ["gravity girl", "combo", "card draw"],
		comments: ["combo enabler", "terrible defensively"]
	}
]
