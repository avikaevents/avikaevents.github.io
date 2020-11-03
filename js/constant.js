export const _urls={
    _info: "https://api.github.com/orgs/MACS-DTU",
    _repos: "https://api.github.com/orgs/MACS-DTU/repos",
    _members: "https://api.github.com/orgs/MACS-DTU/public_members",
    _sheets_url: "https://docs.google.com/spreadsheets/d/1dttEoM1l_W2Yatk1TT2QxtNHx_wnBzNd3pq2_yszBAs/edit?usp=sharing"
};

// http helper function!
export const get=async (url) => {
    return (await (await fetch(url)).json());
};
