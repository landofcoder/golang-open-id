package model

type User struct {
	Username      string `json:"username"`
	FirstName     string `json:"firstname"`
	LastName      string `json:"lastname"`
	Email         string `json:"email"`
	Phone         string `json:"phone"`
	IsVerifyEmail string `json:"isverifyemail"`
	IsVerifyPhone string `json:"isverifyphone"`
	Password      string `json:"password"`
	Group         string `json:"group"`
	Status        string `json:"status"`
	Permission    string `json:"permission"`
	Token         string `json:"token"`
}

type UserGroup struct {
	Groupname  string `json:"groupname"`
	Status     string `json:"status"`
	IsRoot     string `json:"isroot"`
	Permission string `json:"permission"`
}

type ResponseResult struct {
	Error  string `json:"error"`
	Result string `json:"result"`
}
