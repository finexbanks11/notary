#include <eosio/eosio.hpp>

using namespace eosio;

class [[eosio::contract("notary")]] notary_contract : public contract {
public:
    using contract::contract;

    [[eosio::action]]
    void notarize(name user, std::string document_hash) {
        require_auth(user);

        notary_table notaries(get_self(), get_self().value);
        notaries.emplace(user, [&](auto& row) {
            row.id = notaries.available_primary_key();
            row.user = user;
            row.document_hash = document_hash;
            row.timestamp = current_time_point();
        });
    }

private:
    struct [[eosio::table]] notary {
        uint64_t id;
        name user;
        std::string document_hash;
        time_point timestamp;

        uint64_t primary_key() const { return id; }
    };
    typedef multi_index<"notaries"_n, notary> notary_table;
};

EOSIO_DISPATCH(notary_contract, (notarize))
