
// aggregate pipeline to count all active notes



// 1.to find how much active user are there

[
    {
        $match: {
            isActive: true
        }
    },
    {
        $count: 'ActiveUser'
    }
]


// 2. what is the average age of all users

[
    {
        $group: { _id: "$gender", }
    }
]

[
    {
        $group: {
            _id: null,
            averageAge: {
                $avg: "$age"
            }

        }
    }
]

[
    {
        $group: {
            _id: '$gender',
            averageAge: {
                $avg: "$age"                   // avg male age =29.851926977687626      avg female age =29.81854043392505
            }
        }
    }
]


//3 List the top 5 common fruit names among all users
[
    {
        $group: {
            _id: '$favoriteFruit',
            count: {
                $sum: 1
            }
        },
    },
    {
        $sort: {
            cout: 1
        }
    },
    {
        $limit: 2
    }
]


//4. find the total number of female and male users

[
    {
        $group: {
            _id: '$gender',
            count: {
                $sum: 1
            }
        },
    },
    {
        $sort: {
            cout: 1
        }
    }
]

// 5. which country has the higest number of registered users
[
    {
        $group: {
            _id: "$company.location.country",
            userCount: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            userCount: 1
        }
    },
    { $limit: 2 }

]


// 6 List all unique eye colors present in collection

[
    {
        $group: {
            _id: '$eyeColor',
            count: {
                $sum: 1
            }
        },
    }
]


// 7 what is the average number of tags per user    ? 

[
    {
        $unwind: "$tags",
    },
    {
        $group: {
            _id: "$_id",
            numberOfTags: {
                $sum: 1,
            },
        },
    },
    {
        $group: {
            _id: null,
            averageNumberOfTags: {
                $avg: "$numberOfTags"
            }
        }
    }
]


// 2nd method 

[
    {
        $addFields: {
            numberOfTags: {
                $size: { $ifNull: ["$tags", []] },
            },
        },
    },
    {
        $group: {
            _id: null,
            averageNumnerOfTsgs: {
                $avg: "$numberOfTags",
            },
        },
    }
]


// 8. how many user have "enim"  as one for their tags ?
[
    {
        $match: {
            tags: "enim",
        },
    },
    {
        $count: 'userWithEnimTag'
    }
]



// 9. what are the names and age of user who are inactive and have "velit" as a tags  ?

[
    {
        $match: {
            isActive: false,
            tags: "velit",
            age: 20,
        },
    },
    {   
        $project: {         // project is used to show only the required fields
            name: 1,
            age: 1,
        },
    }
]


// 10. how many user have a phone number starting with  +1 (940)  ?

[
    {
        $match: {
            "company.phone": /^\+1\(940\)/,
        },
    },
    {
        $count: "userWithSpecialPhoneNo",
    }
]

// 11 who has registered most recently ?
[
    {
        $sort: {
            registered: -1,
        },
    },
    {
        $limit: 5,
    },
    {
        $project: {
            name: 1,
            age: 1

        }
    }
]


// 12.categorise user by their favoriteFruit
[
    {
        $group: {
            _id: "$favoriteFruit",
            users: { $push: "$name" }

        }
    }
]


//   13. how many user have 'ad' as the second tagsin their list of tags

[
    {
        $match: {
            "tags.1": "ad"
        }
    }, {
        $count: 'secondTagCount'
    }
]


// 14 find users who have both 'enim' and 'id' as their tags
[
    {
        $match: {
            tags: {
                $all: ['enim', 'id']
            }
        }
    }
]


//   15.List all the companies in the usa  with their corresponding user count

[
    {
        $match: {
            "company.location.country": "USA"
        }
    },
    {
        $group: {
            _id: "$company.name",
            userCount: {
                $sum: 1
            }
        }
    }
]


//   lookup

[
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "id",
            as: "author_details",
        },
    },
    {
        $addFields: {
            author_details: {
                $first: "$author_details",
            },
        },
    }
]



[
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "id",
            as: "author_details",
        },
    },
    {
        $addFields: {
            author_details: {
                $arrayElemAt: ["$author_details", 1]
            },
        },
    }
]